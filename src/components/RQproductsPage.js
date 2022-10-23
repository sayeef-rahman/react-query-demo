import React from "react";
import { Link } from "react-router-dom";
import { useProductsData } from "../hooks/useProductsData";

const RQproductsPage = () => {
  const onSuccess = () => {
    console.log("fetching success!");
  };

  const onError = () => {
    console.log("fetching error!");
  };
  const {
    isloading,
    error,
    isError,
    data,
    refetch,
    isFetching,
    isLoadingError,
  } = useProductsData(onSuccess, onError);
  // const {
  //   isloading,
  //   data,
  //   isError,
  //   error,
  //   isLoadingError,
  //   refetch,
  //   isFetching,
  // } = useQuery("products", getProducts, {
  //   cacheTime: 5000, //by default 5 min
  //   staleTime: 0, //default value
  //   refetchOnMount: false, //default value true best option true/false/"always"
  //   refetchOnWindowFocus: true, //default value true/false/"always"
  //   refetchInterval: 2000, //default value true/false/ time in milisecond
  //   enabled: false, // fetch only on button click.othger wise it will fetch data on component mount. other option will work asusual
  //   onSuccess, //onSuccess: onSuccess because the key & value (function) are same. called shorthand
  //   onError: onError, //onSuccess: onSuccess because the key & value (function) are same. called shorthand
  //   // select is ues to transform / filters data & after return it assigns  data in destructured data.
  //   // select: (data)=>{
  //   //   const productNames = data.data.map((name)=> name.title);
  //   //   console.log(productNames);
  //   //   return productNames;
  //   // },
  // });
  const products = data?.data;

  if (isloading || isFetching) {
    return <h1>Loading.....</h1>;
  }

  if (isError || error || isLoadingError) {
    if (isError) {
      return <h1 className="text-center mt-5">{isError}</h1>;
    } else if (error) {
      return <h1 className="text-center mt-5">{error}</h1>;
    } else {
      return <h1 className="text-center mt-5">{isLoadingError}</h1>;
    }
  }

  return (
    <div className="container">
      <h1 className="text-center my-5">RQ Data Fetching (Products)</h1>
      <button
        onClick={refetch}
        className="text-center btn btn-primary mx-auto my-2"
      >
        Fetch Data
      </button>
      {products?.map((product) => {
        const { id, title, price } = product;
        return (
          <div
            key={id}
            className="my-2 d-flex justify-content-between bg-primary p-4 text-white "
          >
            <Link to={`/query-products/${id}`} style={{textDecoration:"none", color:"white"}}><p>{id}-{title}</p></Link>
            <p className="m-0">Price - {price} $</p>
          </div>
        );
      })}
    </div>
  );
};

export default RQproductsPage;
