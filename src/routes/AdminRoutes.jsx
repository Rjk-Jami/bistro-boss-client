import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider/AuthProvider';
import useAuth from '../components/hooks/useAuth';
import useAdmin from '../components/hooks/useAdmin';


const AdminRoutes = ({children}) => {
    const {user, loading} = useAuth()
    const [isAdmin , isAdminLoading] = useAdmin()
    const location = useLocation();

    if(loading || isAdminLoading){
        return <progress className="progress w-full"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/" state={{ from: location }} replace />;
};


export default AdminRoutes;

