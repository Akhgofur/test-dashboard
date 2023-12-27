import {
  Dialog,
  DialogActions,
  DialogTitle,
  Typography,
  styled,
} from "@mui/material";
import { memo, useState } from "react";
import { IImage } from "../../common/multiple-image-input/multiple-image-input";
import { FirstStep } from "../product-action-steps/first-step";
import { Button } from "../../common/button";
import { SecondStep } from "../product-action-steps/second-step";
import { ThirdStep } from "../product-action-steps/third-step";
import { useMutation } from "@tanstack/react-query";
import { postRequest } from "../../../data/data.fn";
import { toast } from "react-toastify";

interface ICreateProductModalProps {
  open: boolean;
  setOpen: (arg: boolean) => void;
  refetch: () => void;
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

export const CreateProductModal = memo(
  ({ open, setOpen, refetch }: ICreateProductModalProps) => {
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
      setStep(1);
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

    const { mutate, isPending } = useMutation({
      mutationFn: (payload: any) => postRequest("product-create/", payload),
      onSuccess: (data) => {
        if (data?.status == 201) {
          toast.success("Product added");
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
        images.length &&
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
        const product = {
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
          product,
          productPricings,
          productSpecifications,
          images: images?.map((item) => item.id.toString()),
        };

        mutate(data);
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
  }
);

export const StyledDialogTitle = styled(DialogTitle)`
  font-size: 18px;
  font-weight: 700;
`;

export const ModalLabel = styled(Typography)`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
`;

export const ModalSubLabel = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  color: #64748b;
`;
