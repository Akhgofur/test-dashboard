import { DialogContent, Stack } from "@mui/material";
import { IStep } from "./first-step";
import { Input } from "../../common/input";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { ModalLabel, StyledDialogTitle } from "../create-product-modal";
import { useQuery } from "@tanstack/react-query";
import { getRequest } from "../../../data/data.fn";
import { IMinOrder, ITaxRule } from "../../../types/types";
import { Select } from "../../common/select";

export const ThirdStep = ({
  form: { taxExcludedPrice, taxIncludedPrice, taxRule, unitPrice, minOrder },
  setForm,
  step,
}: IStep) => {
  const { data: taxRules } = useQuery({
    queryFn: () => getRequest("product-pricing-tax"),
    queryKey: ["pricingTax"],
  });

  const { data: minOrderData } = useQuery({
    queryFn: () => getRequest("product-pricing-min-order"),
    queryKey: ["minOrder"],
  });

  return step == 3 ? (
    <>
      <StyledDialogTitle>Pricing</StyledDialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Stack>
            <ModalLabel>Tax excluded price</ModalLabel>
            <Input
              value={taxExcludedPrice}
              type="number"
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  taxExcludedPrice: e.target.value,
                }));
              }}
              icon={<AttachMoneyIcon />}
            />
          </Stack>
          <Stack>
            <ModalLabel>Tax included price</ModalLabel>
            <Input
              value={taxIncludedPrice}
              type="number"
              onChange={(e) => {
                setForm((prev) => ({
                  ...prev,
                  taxIncludedPrice: e.target.value,
                }));
              }}
              icon={<AttachMoneyIcon />}
            />
          </Stack>
          <Stack width={"100%"} spacing={2}>
            <ModalLabel>Tax Rule</ModalLabel>
            <Select
              sx={{ maxWidth: "100%" }}
              data={taxRules}
              renderValue={(item: ITaxRule) => item.id}
              renderLabel={(item: ITaxRule) => item.title}
              onChange={(e) => {
                setForm((prev) => ({ ...prev, taxRule: e.target.value }));
              }}
              value={taxRule}
            />
          </Stack>
          <Stack direction={"row"} spacing={2}>
            <Stack spacing={2}>
              <ModalLabel>Unit Price</ModalLabel>
              <Input
                value={unitPrice}
                type="number"
                onChange={(e) => {
                  setForm((prev) => ({
                    ...prev,
                    unitPrice: e.target.value,
                  }));
                }}
                icon={<AttachMoneyIcon />}
              />
            </Stack>
            <Stack width={"100%"} spacing={2}>
              <ModalLabel>Minimum Order</ModalLabel>
              <Select
                sx={{ maxWidth: "100%" }}
                data={minOrderData}
                renderValue={(item: IMinOrder) => item.id}
                renderLabel={(item: IMinOrder) => item.title}
                onChange={(e) => {
                  setForm((prev) => ({ ...prev, minOrder: e.target.value }));
                }}
                value={minOrder}
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
