import React, { useEffect, useState } from "react";
import axios from "axios";
const ProductsPage = () => {
  const [isLoadin, setIsLoading] = useState(true);
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => {
        if (res.status === 200) {
          setProducts(res?.data);
          setIsLoading(false);
        } else {
          alert("server error");
          setProducts(undefined);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoadin) {
    return <h1 className="text-center mt-5"> Loading.....</h1>;
  }
  return (
    <div className="container">
      <h1 className="text-center mt-5">Tradition Data Fetching (Products)</h1>
      {products?.map((product) => {
        const { id, title, price } = product;
        return (
          <div key={id} className="my-2">
            {id} - {title} [price - {price} BDT]
          </div>
        );
      })}
    </div>
  );
};

export default ProductsPage;
