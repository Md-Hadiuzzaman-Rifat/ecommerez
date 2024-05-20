import React from 'react';
import "./Sidebar.scss"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { LiaSitemapSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { GrArticle } from "react-icons/gr";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";


const Sidebar = () => {
    return (
        <div className='adminSidebar'>
            <div className="container">

                <div className="content">
                    <MdOutlineShoppingCart className='icon'/><Link to="orders"><p>Order</p></Link>
                </div>
                <div className="content">
                    <LiaSitemapSolid className='icon'/><Link to="product"><p>Entry New</p></Link>
                </div>
                <div className="content">
                    <MdCollectionsBookmark  className='icon'/><Link to="productList"><p>Products</p></Link>
                </div>
                <div className="content">
                    <MdOutlineAdminPanelSettings className='icon'/><Link to="control"><p>control</p></Link>
                </div>
                <div className="content">
                    <GrArticle className='icon'/><Link to="blogDashboard"><p>Blogs</p></Link>
                </div>
                <div className="content">
                    <FaRegTrashCan  className='icon'/><Link to="garbage"><p>Garbage</p></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Sidebar;