import {
  DialogContent,
  Stack,
} from "@mui/material";
import { IForm, ModalLabel, ModalSubLabel, StyledDialogTitle } from "../create-product-modal";
import {
  IImage,
  MultipleImageInput,
} from "../../common/multiple-image-input/multiple-image-input";
import { Input } from "../../common/input";
import { useContext } from "react";
import { productContext } from "../../../context/productContex";
import { IBrand, ICategory } from "../../../types/types";
import { Select } from "../../common/select";

export interface IStep {
  step: number;
  form: IForm;
  setForm: (arg: ((prev: IForm) => IForm) | IForm) => void;
}
export const FirstStep = ({
  step,
  form: { images, name, description, brand, category },
  setForm,
}: IStep) => {
  const { categories, brands } = useContext(productContext);

  return step == 1 ? (
    <>
      <StyledDialogTitle>Product Information</StyledDialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack>
              <ModalLabel>Product Image</ModalLabel>
              <ModalSubLabel>
                Image format .jpg .jpeg .png and minimum size 300 x 300px
              </ModalSubLabel>
            </Stack>
            <MultipleImageInput
              files={images}
              setFiles={(arg: IImage[]) =>
                setForm((prev: IForm) => ({ ...prev, images: arg }))
              }
            />
          </Stack>
          <Stack spacing={2}>
            <Stack>
              <ModalLabel>Product name</ModalLabel>
              <ModalSubLabel>
                Include min. 40 characters to make it more interesting
              </ModalSubLabel>
            </Stack>
            <Input
              value={name}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, name: e.target.value }));
              }}
            />
          </Stack>
          <Stack spacing={2}>
            <Stack>
              <ModalLabel>Product description</ModalLabel>
              <ModalSubLabel>
                Include min. 260 characters to make it easier for buyers to
                understand and find your product
              </ModalSubLabel>
            </Stack>
            <Input
              multiline
              rows={5}
              placeholder="Type something..."
              value={description}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, description: e.target.value }));
              }}
            />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Brand</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={brands}
                renderValue={(item: IBrand) => item.id}
                renderLabel={(item: IBrand) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, brand: e.target.value }));
                }}
                value={brand}
              />
            </Stack>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Category</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={categories}
                renderValue={(item: ICategory) => item.id}
                renderLabel={(item: ICategory) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, category: e.target.value }));
                }}
                value={category}
              />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
    </>
  ) : (
    <></>
  );
};
