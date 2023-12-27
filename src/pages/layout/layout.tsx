import { Box } from "@mui/material"
import { Sidebar } from "../../components/sidebar"
import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/navbar"

export const Layout = () => {
  return (
    <Box sx={{display: "flex", width: "100%", minHeight: "100vh", bgcolor: "#F8FAFC"}} >
        <Sidebar />
        <Box sx={{flexGrow: "1", minHeight: "100vh", display: "flex", flexDirection: "column"}} >
            <Navbar />
           <Box sx={{p: 3, flexGrow: "1"}} >
            <Outlet />
           </Box>
        </Box>
    </Box>
  )
}
