
import { IStep } from "./first-step";
import { DialogContent, Stack } from "@mui/material";
import { Select } from "../../common/select";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../../data/data.fn";
import { IKeyboard, IRam, IRom, IWarranty, IWarrantyType } from "../../../types/types";
import { Input } from "../../common/input";
import { ModalLabel, StyledDialogTitle } from "../create-product-modal";

export const SecondStep = ({ form: { keyboard, ram, rom, weight, dimensions, warranty, warrantyType }, setForm, step }: IStep) => {
  const { data: keyboards } = useQuery({
    queryFn: () => getRequest("product-specific-keyboard"),
    queryKey: ["keyboards"],
  });

  const { data: ramData } = useQuery({
    queryFn: () => getRequest("product-specific-main-memory"),
    queryKey: ["ram"],
  });

  const { data: romData } = useQuery({
    queryFn: () => getRequest("product-specific-storage"),
    queryKey: ["rom"],
  });

  const { data: warrantyData } = useQuery({
    queryFn: () => getRequest("product-specific-warranty"),
    queryKey: ["warranty"],
  });
  const { data: warrantyTypeData } = useQuery({
    queryFn: () => getRequest("product-specific-warranty-type"),
    queryKey: ["warrantytype"],
  });

  return step == 2 ? (
    <>
      <StyledDialogTitle>Specifications</StyledDialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Stack width={"100%"} spacing={2}>
            <ModalLabel>Keyboard language</ModalLabel>
            <Select
              sx={{ maxWidth: "100%" }}
              data={keyboards}
              renderValue={(item: IKeyboard) => item.id}
              renderLabel={(item: IKeyboard) => item.title}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, keyboard: e.target.value }));
              }}
              value={keyboard}
            />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Memory (RAM)</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={ramData}
                renderValue={(item: IRam) => item.id}
                renderLabel={(item: IRam) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, ram: e.target.value }));
                }}
                value={ram}
              />
            </Stack>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Storage (ROM)</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={romData}
                renderValue={(item: IRom) => item.id}
                renderLabel={(item: IRom) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, rom: e.target.value }));
                }}
                value={rom}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Product weight</ModalLabel>
              <Input
                sx={{ maxWidth: "100%" }}
                
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, weight: e.target.value }));
                }}
                value={weight}
              />
            </Stack>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Dimension (L x W x T)</ModalLabel>
              <Input
                sx={{ maxWidth: "100%" }}
                
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, dimensions: e.target.value }));
                }}
                value={dimensions}
              />
            </Stack>
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Warranty</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={warrantyData}
                renderValue={(item: IWarranty) => item.id}
                renderLabel={(item: IWarranty) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, warranty: e.target.value }));
                }}
                value={warranty}
              />
            </Stack>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Warranty type</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={warrantyTypeData}
                renderValue={(item: IWarrantyType) => item.id}
                renderLabel={(item: IWarrantyType) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, warrantyType: e.target.value }));
                }}
                value={warrantyType}
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
