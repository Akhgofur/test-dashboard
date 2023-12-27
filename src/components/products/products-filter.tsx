import { Box, Stack } from "@mui/material";
import { Select } from "../common/select";
import { Button } from "../common/button";
import AddIcon from "@mui/icons-material/Add";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { LuLayoutGrid } from "react-icons/lu";
import { useContext } from "react";
import { productContext } from "../../context/productContex";
import { IBrand, ICategory } from "../../types/types";

export const ProductsFilter = () => {
  const { brand, setBrand, category, setCategory, setCreate, brands, categories } = useContext(productContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Stack direction={"row"} spacing={2}>
        <Select
          data={brands}
          renderValue={(item: IBrand) => item.id}
          renderLabel={(item: IBrand) => item.title}
          defaultValue="All brands"
          onChange={(e) => {setBrand(e.target.value)}}
          value={brand}
        />
       <Select
          data={categories}
          renderValue={(item: ICategory) => item.id}
          renderLabel={(item: ICategory) => item.title}
          defaultValue="All categories"
          onChange={(e) => {setCategory(e.target.value)}}
          value={category}
        />
      </Stack>
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Button
        onClick={() => {setCreate(true)}}
          icon={<AddIcon />}
          disableElevation
          customColor="#2563EB"
          variant="contained"
        >
          New Product
        </Button>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Button variant="text">
            <FormatListBulletedIcon />
          </Button>
          <Button variant="text">
            <LuLayoutGrid style={{ fontSize: "24px" }} />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
