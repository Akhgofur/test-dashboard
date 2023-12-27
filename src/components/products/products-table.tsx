import {
  Box,
  Button,
  Checkbox,
  Pagination,
  Stack,
  Switch,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CustomTable } from "../common/table";
import { productsTableHeaders, tableLimits } from "../../utils/consts";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { IProduct } from "../../types/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteRequest, getRequest, patchRequest } from "../../data/data.fn";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { productContext } from "../../context/productContex";
import { Select } from "../common/select";
import { Loading } from "../common/loading";
import { CreateProductModal } from "./create-product-modal";
import { toast } from "react-toastify";
import { EditProductModal } from "./edit-product-modal";

export const ProductsTable = () => {
  const [limit, setLimit] = useState<number>(10);
  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [product, setProduct] = useState<null | IProduct>(null);
  const [edit, setEdit] = useState<boolean>(false);

  const { brand, category, create, setCreate } = useContext(productContext);

  const {
    data,
    refetch,
    isFetching,
  } = useQuery({
    queryFn: () =>
      getRequest(`product-list/?p=true&limit=${limit}&offset=${offset}`, {
        params: {
          brand: brand != "default" ? brand : null,
          category: category != "default" ? category : null,
        },
      }),
    queryKey: ["products"],
  });

  const {
    count,
    results: products
  } = data ? data : {
    count: 1,
    results: []
  }

  useEffect(() => {
    refetch();
  }, [brand, category, limit, offset]);

  const { mutate } = useMutation({
    mutationFn: (id: string) => deleteRequest("product-delete/" + id),
    onSuccess: (data) => {
      if(data.status >= 200 && data.status < 300) {
        toast.success("Product deleted")
        refetch()
      }
    },
    onError: (err) => {
      toast.error(err.message)
    },
  });


  const { mutate: patchProduct } = useMutation({
    mutationFn: ({id, payload} :{id: string | number, payload: any}) => patchRequest((`product-update/${id}/`), payload),
    onSuccess: (data) => {
        console.log("response", data);
        
      if (data?.status >= 200 && data?.status < 300) {
        toast.success("Product edited");
        refetch();
      }
    },
    onError: (err) => {
      toast.error(err?.message);
    },
  });

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CreateProductModal open={create} setOpen={setCreate} refetch={refetch} />
      <EditProductModal product={product} setProduct={setProduct} open={edit} setOpen={setEdit} refetch={refetch} />
      <Box sx={{ mb: 3, flexGrow: "1" }}>
        {isFetching ? (
          <Loading />
        ) : (
          <CustomTable
            head={
              <TableRow
                sx={{
                  bgcolor: "#F8FAFC",
                  overflow: "hidden",
                  color: "#94A3B8",
                  borderRadius: "12px",
                  fontSize: "16px",
                }}
              >
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                {productsTableHeaders.map((item) => (
                  <TableCell
                    sx={{
                      fontSize: "16px",
                      color: "#94A3B8",
                      fontWeight: "500",
                    }}
                    key={item.id}
                  >
                    {item.name}
                  </TableCell>
                ))}
                <TableCell padding="normal">
                  <MoreHorizIcon sx={{ color: "#64748B" }} />
                </TableCell>
              </TableRow>
            }
          >
            {products &&
              products?.map((item: IProduct) => (
                <TableRow sx={{ fontSize: "16px", fontWeight: "600" }}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                      <img
                        src={item?.productImages[0]}
                        style={{
                          width: "48px",
                          height: "48px",
                          objectFit: "cover",
                          borderRadius: "8px",
                        }}
                        alt=""
                        className=""
                      />
                      <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                        {item.title}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item.brand?.title}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item.stock}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item.sales}
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", fontWeight: "600" }}>
                    {item.productPricings?.price}
                  </TableCell>
                  <TableCell>
                    <Switch onChange={(e) => {
                      patchProduct({id: item?.guid, payload: {product: {status: e.target.checked}}})
                    }}  checked={item.status} />
                  </TableCell>
                  <TableCell>
                    <Stack direction={"row"}>
                      <Button color="secondary" onClick={() => {
                        setProduct(item)
                        setEdit(true)
                      }} >
                        <EditIcon />
                      </Button>
                      <Button
                        color="error"
                        onClick={() => {
                          mutate(item?.guid);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </CustomTable>
        )}
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Select
          data={tableLimits}
          renderLabel={(item: number) => item}
          renderValue={(item: number) => item}
          value={limit + ""}
          onChange={(e) => {
            setLimit(+e.target.value);
            setOffset(0);
            setPage(1);
          }}
        />

        <Pagination
          count={Math.ceil(count / limit)}
          page={page}
          onChange={(e: ChangeEvent<unknown>, value: number) => {
            setPage(value);
            setOffset(value * limit - limit);
          }}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
};
