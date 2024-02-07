import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';


const PublicRoute = () => {
    const {currentUser}= useAuth() || {}
    return currentUser?.email ? <Navigate to="/" replace={true}> </Navigate> : <Outlet/> 
};

export default PublicRoute;