import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./MData";
import Product from "./Product";
const Search = ({cart , setCart}) => {
  const { trem } = useParams();
  const [filterdata, setFilterData] = useState([]);

  useEffect(() => {
    const searchProduct = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(trem.toLowerCase())
      );
      setFilterData(data);
    };

    searchProduct();
  }, [trem]);
  return (
    <>
      <Product cart={cart} setCart={setCart} items={filterdata} />
    </>
  );
};

export default Search;
