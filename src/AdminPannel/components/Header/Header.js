import React from 'react';
import "./Header.scss"
import { MdDashboard } from "react-icons/md";


const Header = () => {
    return (
        <div className='dashboardHeader'>
            <div className='container'><p>Dashboard</p>
            <MdDashboard /></div>
        </div>
    );
};

export default Header;