import React, { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth,setIsAuth] = useState(false)
  if(isAuth){
     return (children)
  }
  // else{
  //   return <Navigate to={"/login"}/>
  // }
  return <AuthContext.Provider value={{isAuth,setIsAuth}}>{children}</AuthContext.Provider>;
};
