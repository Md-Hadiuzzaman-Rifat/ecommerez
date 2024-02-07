import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useGetUsersQuery } from '../../../features/users/userApi';
import { Navigate, Outlet } from 'react-router-dom';

const ControllerPrivateRoute = () => {
    const {currentUser}= useAuth() || {}
    
    const {data, isLoading}= useGetUsersQuery()
    let person= data?.find(e=>e.email===currentUser?.email)

    if (!isLoading){
        return Object.keys(person || [])?.includes("role") && currentUser ? <Outlet></Outlet> : <Navigate to="/dashboard"/>
    }
};

export default ControllerPrivateRoute;

