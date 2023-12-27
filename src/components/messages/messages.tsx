import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { StyledHeading } from "../dashboard";
import { messages } from "./data";

export const Messages = () => {
  return (
    <Box sx={{ p: 3, borderRadius: "12px", bgcolor: "#fff" }}>
      <StyledHeading>Messages</StyledHeading>

      <List>
        {messages.map((item) => (
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <item.icon sx={{ fontSize: "35px" }} />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary={
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <StyledHeading sx={{ fontSize: "14px" }}>
                    {item.name}
                  </StyledHeading>
                  <Typography sx={{ fontSize: "12px", color: "#64748B" }}>
                    {new Date(item.time).getHours() + ":" + (new Date(item.time).getMinutes())}
                  </Typography>
                </Stack>
              }
              secondary={item.message}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
