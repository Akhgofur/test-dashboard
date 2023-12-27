import { Box } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

export const Calendar = () => {



  return (
    <Box sx={{ p: 3, borderRadius: "12px", bgcolor: "#fff", fontSize: "16px !important" }}>
      <FullCalendar  plugins={[dayGridPlugin]} headerToolbar={{start: "title", center: "", end: "prev next"}} initialView="dayGridMonth" />-
    </Box>
  );
};
