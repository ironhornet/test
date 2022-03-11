import { FC } from "react";
import { useLocation, Navigate } from "react-router";

import { IProtectedRoute } from "./authProvider/authProvider.interface"
import { RootState } from "../redux/store";
import { useAppSelector } from "../hooks/redux/redux"




const ProtectedRoute: FC<IProtectedRoute> = (props) => {
    const { children } = props;
    const location = useLocation();
    const { isAuth } = useAppSelector((state:RootState) => state.userReducer);
    
    if (!isAuth) {
        return <Navigate 
            to="/login" 
            state={{ from: location }} 
            />
    }

    return children;
}

export default ProtectedRoute