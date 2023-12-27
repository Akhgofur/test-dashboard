import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { ProductContextProvider } from "./context/productContex";

const App = () => {

  const router = createBrowserRouter(routes());

  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
};

export default App;
