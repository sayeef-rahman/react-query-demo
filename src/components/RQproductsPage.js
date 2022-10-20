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

  if()

  return (
    <div className="container">
      <h1 className="text-center mt-5">RQ Data Fetching (Products)</h1>
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

export default RQproductsPage;
