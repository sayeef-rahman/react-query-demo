import axios from "axios";
import { useQuery } from "react-query";
const baseUrl = process.env.REACT_APP_BASE_URL;

const getProductDetails = (id) => {
  console.log(`${baseUrl}/products/${id}`);
  return axios.get(`${baseUrl}/products/${id}`);
};

export const useProductDetails = (id, onSuccess, onError) => {
  return useQuery("single-product-data", () => getProductDetails(id));
};
