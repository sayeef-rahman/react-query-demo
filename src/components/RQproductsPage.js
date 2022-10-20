import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;

const RQproductsPage = () => {
  const getSuperHeroes = () => {
    console.log(`${baseUrl}/products`);
    return axios.get(`${baseUrl}/products`);
    // return axios.get("http://localhost:4000/products")
  };
  const { isloading, data, isError, error, isLoadingError } = useQuery(
    "super-hero",
    getSuperHeroes
  );
  console.log("query", data);
  const products = data?.data;

  if (isloading) {
    return <h1>Loading.....</h1>;
  }

  if (isError || error || isLoadingError) {
    return <h1 className="text-center mt-5">{error}</h1>;
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">RQ Data Fetching (Products)</h1>
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

export default RQproductsPage;
