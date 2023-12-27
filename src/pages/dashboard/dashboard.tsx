import { Box, Stack } from "@mui/material";
import { RecentProjects } from "../../components/recent-projects";
import { Activity } from "../../components/activity";
import { TaskSummary } from "../../components/task-summary";
import { Calendar } from "../../components/calendar";
import { Messages } from "../../components/messages";

export const Dashboard = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "start", gap: 3 }}>
      <Stack sx={{flexGrow: "1", width: "65%"}} spacing={3}>
        <RecentProjects />
        <Stack direction={"row"} alignItems={"stretch"} gap={2}>
            <Activity />
            <TaskSummary />
        </Stack>
      </Stack>
      <Stack spacing={2} width={"33%"} >
        <Calendar />
        <Messages />
      </Stack>
    </Box>
  );
};
