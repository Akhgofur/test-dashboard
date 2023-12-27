import { Dialog, DialogActions } from "@mui/material";
import { memo, useMemo, useState } from "react";
import { IImage } from "../../common/multiple-image-input/multiple-image-input";
import { Button } from "../../common/button";
import { FirstStep } from "../product-action-steps/first-step";
import { SecondStep } from "../product-action-steps/second-step";
import { ThirdStep } from "../product-action-steps/third-step";
import { useMutation } from "@tanstack/react-query";
import { getRequest, putRequest } from "../../../data/data.fn";
import { toast } from "react-toastify";
import { IProduct, ISingleProduct } from "../../../types/types";

interface IEditProductModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  refetch: () => void;
  product: IProduct | null;
  setProduct: (arg: IProduct | null) => void;
}

export interface IForm {
  images: IImage[];
  name: string;
  description: string;
  brand: undefined | string;
  category: undefined | string;
  keyboard: undefined | string;
  ram: undefined | string;
  rom: undefined | string;
  weight: string;
  dimensions: string;
  warranty: undefined | string;
  warrantyType: undefined | string;
  taxExcludedPrice: number | string;
  taxIncludedPrice: number | string;
  taxRule: undefined | string;
  unitPrice: number | string;
  minOrder: undefined | string;
}

export const EditProductModal = memo(({
    open,
    setOpen,
    refetch,
    product,
    setProduct,
  }: IEditProductModalProps) => {
    const [step, setStep] = useState<number>(1);
  
    const [form, setForm] = useState<IForm>({
      images: [],
      name: "",
      description: "",
      brand: "",
      category: "",
      keyboard: "",
      ram: "",
      rom: "",
      weight: "",
      dimensions: "",
      warranty: "",
      warrantyType: "",
      taxExcludedPrice: 0,
      taxIncludedPrice: 0,
      taxRule: "",
      unitPrice: 0,
      minOrder: "",
    });
  
    const handleClose = () => {
      setOpen(false);
      setStep(1)
      setProduct(null)
      setForm({
        images: [],
        name: "",
        description: "",
        brand: "",
        category: "",
        keyboard: "",
        ram: "",
        rom: "",
        weight: "",
        dimensions: "",
        warranty: "",
        warrantyType: "",
        taxExcludedPrice: 0,
        taxIncludedPrice: 0,
        taxRule: "",
        unitPrice: 0,
        minOrder: "",
      });
    };
  
    useMemo(() => {
      if (!!product && open) {
  
          const getProduct = async (id: number | string) => {
              const res = await getRequest(`product-detail/${id}/`) as ISingleProduct | null
              if(res) {
  
                  setForm({
                      images: [],
                      name: res?.title,
                      description: res?.description,
                      brand: res?.brand?.id + "",
                      category: res?.category?.id + "",
                      keyboard:  res?.specific?.keyboard_language?.id + "",
                      ram: res?.specific?.main_memory?.id + "",
                      rom: res?.specific?.storage + "",
                      weight: res?.specific?.wright,
                      dimensions: res?.specific?.dimension,
                      warranty: res?.specific?.warranty + "",
                      warrantyType: res?.specific?.warranty_type + "",
                      taxExcludedPrice: res?.sales,
                      taxIncludedPrice: res?.stock,
                      taxRule: res?.pricing?.tax?.id + "",
                      unitPrice:  res?.pricing?.price,
                      minOrder: res?.pricing?.min_order?.id + "",
                    });
              }
              
          }
  
          getProduct(product?.guid)
  
      }
    }, [product, open]);
  
    const { mutate, isPending } = useMutation({
      mutationFn: ({id, payload} :{id: string | number, payload: any}) => putRequest((`product-update/${id}/`), payload),
      onSuccess: (data) => {
          console.log("response", data);
          
        if (data?.status >= 200 && data?.status < 300) {
          toast.success("Product edited");
          handleClose();
          refetch();
        }
      },
      onError: (err) => {
        toast.error(err?.message);
      },
    });
  
    const handleSubmit = () => {
      const {
        images,
        name,
        description,
        brand,
        category,
        keyboard,
        ram,
        rom,
        weight,
        dimensions,
        warranty,
        warrantyType,
        taxExcludedPrice,
        taxIncludedPrice,
        taxRule,
        unitPrice,
        minOrder,
      } = form;
  
      if (
        name &&
        description &&
        brand &&
        category &&
        keyboard &&
        ram &&
        rom &&
        weight &&
        dimensions &&
        warranty &&
        warrantyType &&
        taxExcludedPrice &&
        taxIncludedPrice &&
        taxRule &&
        unitPrice &&
        minOrder
      ) {
        const editedProduct = {
          title: name,
          description: description,
          brand,
          category,
          stock: taxIncludedPrice,
          sales: taxExcludedPrice,
          status: true,
        };
  
        const productSpecifications = {
          keyboard_language: keyboard,
          main_memory: ram,
          storage: rom,
          warranty,
          warranty_type: warrantyType,
          wright: weight,
          dimension: dimensions,
        };
  
        const productPricings = {
          tax: taxRule,
          min_order: minOrder,
          price: unitPrice,
        };
  
        const data = {
          product: editedProduct,
          productPricings,
          productSpecifications,
          images: images?.map((item) => item.id.toString()),
        };
  
        console.log(images, "sadas");
        
  
        console.log(data);
        
  
        mutate({id: product?.guid || "1" , payload: data});
      } else {
        toast.error("Fill all fields");
      }
    };
  
    return (
      <Dialog fullWidth maxWidth={"sm"} open={open} onClose={handleClose}>
        <FirstStep form={form} setForm={setForm} step={step} />
        <SecondStep form={form} setForm={setForm} step={step} />
        <ThirdStep form={form} setForm={setForm} step={step} />
        <DialogActions
          sx={{
            justifyContent: "center",
            gap: 2,
            pt: 2,
            borderTop: "1px solid #F1F5F9",
          }}
        >
          <Button
          disabled={isPending}
            onClick={() => {
              if (step != 1) {
                setStep((prev) => prev - 1);
              } else {
                handleClose();
              }
            }}
            sx={{ width: "100%" }}
            variant="outlined"
          >
            {step != 1 ? "Previous" : "Cancel"}
          </Button>
          <Button
          disabled={isPending}
            onClick={() => {
              if (step != 3) {
                setStep((prev) => prev + 1);
              } else {
                handleSubmit();
              }
            }}
            sx={{ width: "100%" }}
            variant="contained"
          >
            {step != 3 ? "Next" : "Done"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  })
