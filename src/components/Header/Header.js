import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

const Header = () => {

  return (
    <div className="header">
      <div className="header_content">
        <div className="header_link">
          <div>
            <Link to="home">Home</Link>
          </div>
          <div>
            <Link to="about">About</Link>
          </div>
          <div>
            <Link to="categories">Categories</Link>
          </div>
        </div>
        <div className="header_name">
          <h1>
            <Link to="home">Ecommerez</Link>
          </h1>
        </div>
        <div className="header_shopping">
          <Link to="#">
            <BiSearch></BiSearch>
          </Link>
          <Link to="#">
            <AiOutlineHeart></AiOutlineHeart>
          </Link>
          <Link to="#">
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
