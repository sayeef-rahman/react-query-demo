import React from "react";
import axios from "axios";
import { useQueries, useQuery } from "react-query";
const baseUrl = process.env.REACT_APP_BASE_URL;

const RQDynamicParallal = ({ ids }) => {
  const getProductDetails = (id) => {
    return axios.get(`${baseUrl}/products/${id}`);
  };
  console.log(ids);
  const result = useQueries(
    ids.map((id) => {
      return {
        queryKey: ["product", id],
        queryFn: () => getProductDetails(id),
      };
    })
  );
  console.log(result);
  return <div>Dynamic parallal</div>;
};

export default RQDynamicParallal;
