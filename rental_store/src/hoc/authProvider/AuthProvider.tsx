import { createContext } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../redux/user/userSlice";
import { NavigateFunction } from "react-router-dom"
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../hooks/redux/redux";

interface IProtectedRoute {
  children: JSX.Element;
}

// const defaultContext = {
//   signIn: (value: () => NavigateFunction) => {},
//   signOut: (value: () => NavigateFunction) => {},
// };

interface IAuthContext {
  signIn: (value: NavigateFunction) => void;
  signOut: (value: NavigateFunction) => void;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthProvider = ({ children }: IProtectedRoute) => {
  const { isAuth } = useAppSelector((state:RootState) => state.userReducer);
  const dispatch = useDispatch();

  const signIn = (cb: any ) => { // TODO
    dispatch(login({ email: "eve.holt@reqres.in", password: "cityslicka" }));
    
    if (isAuth) {    
      cb();
    }
  };
  const signOut = (cb: any ) => { //TODO
    if (localStorage.getItem("token")) {
      dispatch(logout());
      cb();
    }
  };

  const value = { signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
