import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import {useState, useEffect} from "react";

const Header = () => {
  const [scrolled,setScrolled]=useState(false)
  const handleScrolled=()=>{
    const offset= window.scrollY;
    if (offset > 100) {
      setScrolled(true);
  } else {
      setScrolled(false);
  }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScrolled)
  },[])
  return (
    
    <div className={`header ${scrolled?"sticky_header":"" }`}>
      {
      console.log(scrolled)
    }
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
            <Link to="home">Ecommerz</Link>
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
