import React, { useEffect, useState } from "react";

const SuperHeroPage = () => {
  const [isLoadin, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((res) => {
        setData(res);
      setIsLoading(false);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mt-5">Tradition Data Fetching</h1>
    </div>
  );
};

export default SuperHeroPage;
