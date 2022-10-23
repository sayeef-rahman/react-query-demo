import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
const baseUrl = process.env.REACT_APP_BASE_URL;

const getProducts = () => {
  return axios.get(`${baseUrl}/products`);
};
const getTodos = () => {
  return axios.get(`${baseUrl}/todos`);
};

const RQParallal = () => {
  const { data: products } = useQuery("products", getProducts);
  const { data: todos } = useQuery("todos", getTodos);
  return (
    <div>
      <p>Number Of products: {products?.data.length}</p>
      <p>Number Of todos: {todos?.data.length}</p>
    </div>
  );
};

export default RQParallal;
