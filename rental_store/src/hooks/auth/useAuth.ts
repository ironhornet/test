import { useContext } from "react";
import { AuthContext } from "../../hoc/authProvider/AuthProvider";

export const useAuth = () => {
    return useContext(AuthContext);
};
