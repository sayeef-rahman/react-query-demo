import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQproductsPage = () => {
  const getSuperHeroes = () => {
    return axios.get("http://localhost:4000/products");
  };
  const { isloading, data } = useQuery("super-hero", getSuperHeroes);
  console.log("query", data);
  const products = data?.data;

  if (isloading) {
    return <h1>Loading.....</h1>;
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
