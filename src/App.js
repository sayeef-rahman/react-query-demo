import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQproductsPage from "./components/RQproductsPage";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import RQParallal from "./components/RQParallal";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/query-products" element={<RQproductsPage />} />
          <Route
            path="/query-products/:productId"
            element={<ProductDetails />}
          />
          <Route path="/parallal-query-product" element={<RQParallal />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position={"bottom-left"} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
