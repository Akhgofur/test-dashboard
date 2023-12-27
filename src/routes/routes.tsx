import { Layout } from "../pages/layout";
import { LuLayoutGrid } from "react-icons/lu";
import { HiBriefcase } from "react-icons/hi2"
import { CgCheckR } from "react-icons/cg";
import { TbTrophy } from "react-icons/tb";
import { Products } from "../pages/products";
import { ProductsFilter } from "../components/products/products-filter";
import { Dashboard } from "../pages/dashboard";
import { NotFound } from "../components/not-found/not-found";



export const sidebarRoutes = [
    {
        name: "Dashboard",
        path: "/",
        icon: LuLayoutGrid ,
        bottomNav: null
    },
    {
        name: "My Tasks",
        path: "/tasks",
        icon: CgCheckR ,
        bottomNav: null
    },
    {
        name: "Products",
        path: "/products",
        icon: HiBriefcase ,
        bottomNav: <ProductsFilter />
    },
    {
        name: "Goals",
        path: "/goals",
        icon: TbTrophy ,
        bottomNav: null
    },
]

export const routes = () => ([
    {
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <Dashboard />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
    },
   
])