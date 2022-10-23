import React from "react";
import { useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log(productId);
  const { data, isLoading, error, isFetching } = useProductDetails(productId);

  const { title, id, price } = data?.data;
  return (
    <div className="text-center">
      <p>Product Name: {title}</p>
      <p>Product Price: {price}</p>
    </div>
  );
};

export default ProductDetails;
