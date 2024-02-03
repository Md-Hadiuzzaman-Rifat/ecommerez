import React, { useEffect } from "react";
import "./SearchField.scss";
import { RxCross1 } from "react-icons/rx";
import FilteredProducts from "../FilterProduct/FilteredProducts";
import { useState } from "react";
import { useGetProductsQuery } from "../../features/product/productApi";

const SearchField = ({ handleSearch: control }) => {
  const { data =[], isLoading, isError } = useGetProductsQuery();
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
    
  const doSearch = (value) => {
    setSearch(value);
  };
  const handleSearch = debounceHandler(doSearch, 500);

  useEffect(() => {
    const ans = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    setResult(ans);
  },[search]);


  return (
    <div className="searchFiled">
      <div className="searchFieldContainer">
        <div className="inputContent">
          <input
            onChange={(e) => handleSearch(e.target.value)}
            type="text"
            placeholder="Search Product"
          />
          <span onClick={() => control()}>
            <RxCross1 />
          </span>
        </div>
      </div>
      {
        result.length> 0 && result.map(item=><FilteredProducts item={item} key={item._id}></FilteredProducts>)
      }
      {
        result.length=== 0 && <h1>No Product Found...</h1>
      }
    </div>
  );
};

export default SearchField;
