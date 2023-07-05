import React from 'react';
import "./SearchField.scss";
import { RxCross1 } from "react-icons/rx";
import FilteredProducts from '../FilterProduct/FilteredProducts';
const SearchField = ({handleSearch}) => {
    return (
        <div className="searchFiled">
            <div className="searchFieldContainer">
                <div className="inputContent">
                    <input type="text" placeholder='Search Product'/>
                    <span onClick={()=>handleSearch()}><RxCross1/></span>
                </div>
            </div>
            <FilteredProducts></FilteredProducts>
        </div>
    );
};

export default SearchField; 