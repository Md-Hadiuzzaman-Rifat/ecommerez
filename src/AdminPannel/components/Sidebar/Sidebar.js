import React from 'react';
import "./Sidebar.scss"
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { LiaSitemapSolid } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";


const Sidebar = () => {
    return (
        <div className='adminSidebar'>
             {/* shop  */}
            {/* // moderator */}
            {/* product */}
            {/* order filter (pending, failed, success) */}
            {/* customers details  */}
            <div className="container">
                <div className="content">
                    <AiOutlineShop className='icon'/><p>shop</p>

                </div>
                <div className="content">
                    <MdOutlineShoppingCart className='icon'/><p>Order</p>

                </div>
                <div className="content">
                    <LiaSitemapSolid className='icon'/><p>Products</p>

                </div>
                <div className="content">
                    <MdOutlineAdminPanelSettings className='icon'/><p>control</p>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;