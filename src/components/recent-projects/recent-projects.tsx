import {
  Avatar,
  Box,
  Button,
  IconButton,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { StyledHeading } from "../dashboard";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { recentProjectsData } from "./data";

export const RecentProjects = () => {
  return (
    <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: "12px" }}>
      <Stack
        direction={"row"}
        borderBottom={"1px solid #F1F5F9"}
        justifyContent={"space-between"}
        mb={2}
      >
        <StyledHeading>Recent Projects</StyledHeading>
        <Button>
          <MoreHorizIcon />
        </Button>
      </Stack>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}
      >
        {recentProjectsData.map((item) => (
          <RecentProject
            avatar={item.avatar}
            checkEnd={item.check.end}
            checkStart={item.check.start}
            progress={item.progress}
            title={item.title}
            key={item.id}
          />
        ))}
      </Box>
    </Box>
  );
};

interface IRecentProjectProps {
  title: string;
  progress: number;
  checkStart: number;
  checkEnd: number;
  avatar: string;
}
export const RecentProject = ({
  checkEnd,
  checkStart,
  progress,
  title,
  avatar,
}: IRecentProjectProps) => {
  return (
    <Box
      sx={{ borderRadius: "12px", backgroundColor: "#F8FAFC", width: "100%", p:2 }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <StyledHeading>{title}</StyledHeading>
        <Button>
          <MoreHorizIcon />
        </Button>
      </Stack>
      <Box mb={1} >
        <Stack mb={1} direction={"row"} justifyContent={"space-between"}>
          <Typography sx={{ fontSize: "12px", color: "#64748B" }}>
            Progress
          </Typography>
          <Typography
            sx={{ fontSize: "12px", color: "#0F172A", fontWeight: "600" }}
          >
            {progress}%
          </Typography>
        </Stack>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"} >
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <CheckBoxOutlinedIcon sx={{color: "#64748B"}} />
          <Typography
            sx={{ fontSize: "12px", color: "#0F172A", fontWeight: "600" }}
          >
            {checkStart}{" "}/{" "}
            <span style={{ color: "#64748B", fontWeight: "400" }}>
              {checkEnd}
            </span>
          </Typography>
        </Stack>
        <IconButton>
          <Avatar src={avatar} />
        </IconButton>
      </Stack>
    </Box>
  );
};
