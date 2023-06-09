import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';
import useAuth from '../components/hooks/useAuth';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation();

    if(loading){
        return <progress className="progress w-full"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;