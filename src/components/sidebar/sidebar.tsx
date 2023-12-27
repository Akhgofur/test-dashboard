import { Box, Button, Stack, Typography } from "@mui/material";
import { sidebarRoutes } from "../../routes/routes";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "250px",
        p: 2,
        bgcolor: "#fff",
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0
      }}
    >
      <Box sx={{ px: 2, py: 3, borderBottom: "1px solid #F1F5F9" }}>
        <img
          src="/img/logo.svg"
          style={{ width: "140px", height: "30px", objectFit: "contain" }}
        />
      </Box>
      <Box sx={{ py: 4 }}>
        <Typography
          component={"p"}
          sx={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#94A3B8",
            textTransform: "uppercase",
            letterSpacing: "1px",
            mb: 2,
          }}
        >
          Menu
        </Typography>
        <Stack direction={"column"}>
          {sidebarRoutes?.map((item) => (
            <Button
              sx={{
                p: 2,
                borderRadius: "12px",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: item.path == pathname ? "700" : "500",
                color: item.path == pathname ? "#2563EB" : "#64748B",
                justifyContent: "start",
                gap: 2,
                bgcolor: item.path == pathname ? "#F8FAFC" : "transparent",
              }}
              
              onClick={() => {navigate(item.path)}}
              variant="text"
              startIcon={<item.icon  size={"25px"} />}
            >
              {item.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
