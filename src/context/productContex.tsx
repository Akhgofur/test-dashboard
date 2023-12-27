import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useState } from "react";
import { getRequest } from "../data/data.fn";

// interface IInitialState {
//   brand: null | number;
//   category: null | number;
//   setBrand: (arg: number | null) => void;
//   setCategory: (arg: number | null) => void;
// }

// const initialState = {
//   brand: null,
//   category: null,
//   setBrand: (arg: number | null) => {},
//   setCategory: (arg: number | null) => {},
// };

export const productContext = createContext<any>(undefined);

export const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [brand, setBrand] = useState("default");
  const [category, setCategory] = useState("default");
  const [create, setCreate] = useState<boolean>(false)

  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getRequest("product-brand"),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getRequest("product-category"),
  });

  return (
    <productContext.Provider value={{ brand, setBrand, category, setCategory, create, setCreate, brands, categories }}>
      {children}
    </productContext.Provider>
  );
};
