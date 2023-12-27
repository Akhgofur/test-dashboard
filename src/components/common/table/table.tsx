
import {
  SxProps,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import { ReactNode } from "react";

interface ICustomTableProps {
    head ?: ReactNode,
    children ?: ReactNode ,
    sx ?:  SxProps ,
}


export const CustomTable = ({head, children, sx, }: ICustomTableProps) => {
  return (
    <TableContainer sx={sx} >
      <Table>
        <TableHead sx={{}}>
          {head}
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
