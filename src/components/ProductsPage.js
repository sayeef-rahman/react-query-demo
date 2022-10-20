import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductsPage = () => {
  const [isLoadin, setIsLoading] = useState(true);
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((res) => {
        setProducts(res?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, [baseUrl]);
  if (error) {
    return <h1 className="text-center mt-5">{error}</h1>;
  }

  if (isLoadin) {
    return <h1 className="text-center mt-5"> Loading.....</h1>;
  }
  return (
    <div className="container">
      <h1 className="text-center my-5">Tradition Data Fetching (Products)</h1>
      {products?.map((product) => {
        const { id, title, price } = product;
        return (
          <div
            key={id}
            className="my-2 d-flex justify-content-between bg-primary p-4 text-white "
          >
            <p className="m-0">
              {id} - {title}
            </p>
            <p className="m-0">Price - {price} BDT</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
