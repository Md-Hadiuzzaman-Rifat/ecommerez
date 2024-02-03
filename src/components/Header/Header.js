import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import SearchField from "../SearchField/SearchField";
import Cart from "../Cart/Cart";
import { useAuth } from "../../context/AuthContext";
import { useGetSelectedProductMutation } from "../../features/product/productApi";
import { getStoredCart } from "../../utilities/localStorage";
import { useDispatch, useSelector } from "react-redux";
import { handleToggle, searchToggle } from "../../features/cartHandler/cartHandler";

const Header = () => {
  const dispatch= useDispatch()
  const {cartCondition, searchCondition}= useSelector(state=>state.cartHandler)

  const { currentUser,logout } = useAuth();

  const handleLogout=()=>{
    logout()
  }
  
  const handleSearch = () => {
    dispatch(searchToggle())
  };

  const handleCart = () => {
    dispatch(handleToggle())
  };

  return (
    <div className="header">
      <div className="header_container">
        <div className="header_content">
          <div className="header_name">
            <h1>
              <Link to="home">Eye Care</Link>
            </h1>
          </div>
          <div className="header_shopping">
           
            {
              currentUser?.email ? <span onClick={handleLogout}>Logout</span> : <Link to="/login">
              <span>Login</span>
            </Link>
            }
            {
              currentUser?.email ? <span className="register">{currentUser.displayName}</span> : <Link to="/register">
              <span className="register">Register</span>
            </Link>
            }
            <span className="bar">|</span>
            <div onClick={handleSearch}>
              <BiSearch></BiSearch>
            </div>
            <div>
              <AiOutlineHeart></AiOutlineHeart>
            </div>
            <div onClick={handleCart}>
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
            </div>
          </div>
        </div>
      </div>
      {searchCondition && <SearchField handleSearch={handleSearch} />}
      {cartCondition && <Cart handleCart={handleCart}></Cart>}
    </div>
  );
};

export default Header;
