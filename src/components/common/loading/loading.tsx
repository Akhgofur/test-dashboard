import { Box, CircularProgress, SxProps } from "@mui/material";

export const Loading = ({sx}: {sx ?: SxProps}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx
      }}
    >
      <CircularProgress />
    </Box>
  );
};
