import { Box, Typography } from '@mui/material'

export const NotFound = () => {
  return (
    <Box sx={{width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}} >
        <Typography style={{fontSize: "26px", fontWeight: 700}} >Page Not Found</Typography>
    </Box>
  )
}
