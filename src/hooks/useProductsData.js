import axios from "axios";
import { useQuery } from "react-query";
const baseUrl = process.env.REACT_APP_BASE_URL;

const getProducts = () => {
  return axios.get(`${baseUrl}/products`);
};

export const useProductsData = (onSuccess, onError) => {
  return useQuery("products", getProducts, {
    cacheTime: 5000, //by default 5 min
    staleTime: 0, //default value
    refetchOnMount: false, //default value true best option true/false/"always"
    refetchOnWindowFocus: true, //default value true/false/"always"
    refetchInterval: 2000, //default value true/false/ time in milisecond
    enabled: false, // fetch only on button click.othger wise it will fetch data on component mount. other option will work asusual
    onSuccess, //onSuccess: onSuccess because the key & value (function) are same. called shorthand
    onError: onError, //onSuccess: onSuccess because the key & value (function) are same. called shorthand
    // select is ues to transform / filters data & after return it assigns  data in destructured data.
    // select: (data)=>{
    //   const productNames = data.data.map((name)=> name.title);
    //   console.log(productNames);
    //   return productNames;
    // },
  });
};
