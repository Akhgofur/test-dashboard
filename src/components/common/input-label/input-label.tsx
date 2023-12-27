import { Box, Typography } from "@mui/material";
interface IInputLabelProps {
    label ?: string,
    subLabel ?: string,
    mb ? : number | string
}
export const InputLabel = ({label, subLabel, mb}: IInputLabelProps) => {
  return (
    label ||
    (subLabel && (
      <Box mb={mb}>
        {label && (
          <Typography
            sx={{ fontSize: "14px", fontWeight: "700", color: "#0F172A" }}
          >
            {label}
          </Typography>
        )}
        {subLabel && (
          <Typography
            sx={{ fontSize: "12px", fontWeight: "400", color: "#64748B" }}
          >
            {subLabel}
          </Typography>
        )}
      </Box>
    ))
  );
};
