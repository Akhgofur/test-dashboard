import {
  Badge,
  Box,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Input } from "../common/input";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLocation } from "react-router-dom";
import {  sidebarRoutes } from "../../routes/routes";
export const Navbar = () => {

    const {pathname} = useLocation()

    const bottomNav = sidebarRoutes?.find(item => item.path == pathname)?.bottomNav



  return (
    <Box sx={{ width: "100%", bgcolor: "#fff" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Product List
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "12px", fontWeight: "normal", color: "#64748B" }}
          >
            Detailed information about your products
          </Typography>
        </Box>
        <Stack direction={"row"} spacing={4} alignItems={"center"}>
          <Input placeholder="Search" icon={<SearchIcon />} />
          <IconButton>
            <Badge variant="dot" color="error">
              <NotificationsNoneOutlinedIcon sx={{ fontSize: "26px" }} />
            </Badge>
          </IconButton>
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <AccountCircleIcon sx={{ fontSize: "45px" }} />
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontWeight: "700",
              }}
              primary={"Sam Smith"}
              secondary={"Project Manager"}
            />
          </ListItem>
        </Stack>
      </Box>
              {
                bottomNav
              }
    </Box>
  );
};
