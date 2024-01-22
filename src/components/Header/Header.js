import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import SearchField from "../SearchField/SearchField";
import Cart from "../Cart/Cart";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { currentUser,logout } = useAuth();
  const [search, setSearch] = useState(false);
  const [cart, setCart] = useState(false);

  const handleLogout=()=>{
    logout()
  }
  
  const handleSearch = () => {
    setSearch((search) => !search);
  };
  const handleCart = () => {
    setCart((cart) => !cart);
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
      {search && <SearchField handleSearch={handleSearch} />}
      {cart && <Cart handleCart={handleCart}></Cart>}
    </div>
  );
};

export default Header;
