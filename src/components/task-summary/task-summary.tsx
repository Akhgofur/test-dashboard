import { Box, Stack, Typography } from "@mui/material";
import { taskSummaryData } from "./data";
import { StyledHeading } from "../dashboard";

export const TaskSummary = () => {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "12px",
        bgcolor: "#fff",
        width: "40%",
        flexShrink: 0,
        height: "100%",
      }}
    >
      <StyledHeading mb={2}>Task Summary</StyledHeading>
      <Stack direction={"row"} spacing={"12px"}>
        {taskSummaryData.map((item) => (
          <Stack
            alignItems={"center"}
            sx={{
              bgcolor: item.bgcolor,
              borderRadius: "12px",
              width: "30%",
              px: 2,
              py: 4,
              height: "100%",
            }}
          >
            <Box
              sx={{
                border: "1px solid #CBD5E1",
                borderRadius: "100%",
                width: "40px",
                height: "40px",
                p: 1,

                mb: "12px",
              }}
            >
              <img
                src={item.icon}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                alt=""
              />
            </Box>
            <Typography sx={{ fontSize: "12px", color: item.color }}>
              {item.title}
            </Typography>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700, color: item.color }}
            >
              {item.number}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
