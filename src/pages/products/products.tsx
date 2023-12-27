import { Box } from "@mui/material"
import { ProductsTable } from "../../components/products"

export const Products = () => {
  return (
    <Box sx={{borderRadius: "12px", bgcolor: "#fff", p : 3, height: "100%"}} >
        <ProductsTable />
        
    </Box>
  )
}
