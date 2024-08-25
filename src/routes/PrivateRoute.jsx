import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvide";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log('Location', location.pathname)

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;