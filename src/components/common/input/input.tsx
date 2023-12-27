import { Box, SxProps } from "@mui/material";
import { ChangeEvent, ReactNode } from "react";

interface IInputProps {
  type?: "text" | "number" | "chackbox" | "password" | "email";
  placeholder?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  className?: string;
  label?: string;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  sx?: SxProps;
  multiline?: boolean;
  rows?: number;
}

export const Input = ({
  type = "text",
  icon,
  iconPosition = "start",
  className,
  placeholder,
  value,
  onChange,
  sx = {},
  multiline,
  rows = 1,
}: IInputProps) => {
  return (
    <Box
      sx={{
        fontSize: "16px",
        fontWeight: "600",
        py: 1.5,
        px: 2,
        borderRadius: "12px",
        border: "1px solid #E2E8F0",
        outline: "none",
        display: "flex",
        alignItems: multiline ? "start" : "center",
        color: "#0F172A",
        gap: 1.5,
        ...sx,
      }}
    >
      {!!icon && iconPosition == "start" && icon}
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          style={{
            fontSize: "inherit",
            fontWeight: "inherit",
            outline: "none",
            border: "none",
            flexGrow: "1",
            color: "inherit",
            resize: "none",
          }}
          rows={rows}
        />
      ) : (
        <input
          value={value}
          onChange={onChange}
          className={className}
          placeholder={placeholder}
          style={{
            fontSize: "inherit",
            fontWeight: "inherit",
            outline: "none",
            border: "none",
            flexGrow: "1",
            color: "inherit",
          }}
          type={type}
        />
      )}
      {!!icon && iconPosition == "end" && icon}
    </Box>
  );
};
