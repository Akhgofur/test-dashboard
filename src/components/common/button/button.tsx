import {  ReactNode } from "react";
import {
  Button as MuiButton,
  SxProps,
  ThemeProvider,
  createTheme,
} from "@mui/material";

export interface IButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: string;
  color?: "primary" | "secondary" | "error" | "success";
  variant?: "text" | "outlined" | "contained";
  disableElevation?: boolean;
  sx?: SxProps;
  customColor?: string;
  onClick?: () => void;
  disabled ?: boolean
}

export const Button = ({
  children,
  icon,
  iconPosition = "start",
  color,
  variant = "text",
  disableElevation = false,
  sx = {},
  customColor,
  onClick,
  disabled
}: IButtonProps) => {
  const muiButtonTheme = createTheme({
    palette: {
      primary: {
        main: customColor ? customColor : "#fff",
      },
    },
  });

  return customColor ? (
    <ThemeProvider theme={muiButtonTheme}>
      <MuiButton
        onClick={onClick}
        sx={{
          p: 1.5,
          borderRadius: "12px",
          fontSize: "14px",
          fontWeight: "700",
          ...sx,
        }}
        disabled={disabled}
        startIcon={iconPosition == "start" ? icon : null}
        endIcon={iconPosition == "end" ? icon : null}
        color={color}
        variant={variant}
        disableElevation={disableElevation}
      >
        {children}
      </MuiButton>
    </ThemeProvider>
  ) : (
    <MuiButton
      sx={{
        p: 1.5,
        borderRadius: "12px",
        fontSize: "14px",
        fontWeight: "700",
        ...sx,
      }}
      disabled={disabled}
      onClick={onClick}
      startIcon={iconPosition == "start" ? icon : null}
      endIcon={iconPosition == "end" ? icon : null}
      color={color}
      variant={variant}
      disableElevation={disableElevation}
    >
      {children}
    </MuiButton>
  );
};
