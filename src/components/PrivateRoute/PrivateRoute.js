import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {currentUser}=useAuth() || {}

    return currentUser?.email ? children : <Navigate to="/login"  replace={true}></Navigate>
};

export default PrivateRoute;