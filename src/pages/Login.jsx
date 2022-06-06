import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const handleClick= ()=>{
    setIsAuth(!isAuth)
    
  }
  console.log(isAuth)
  return (
    <div>
      <input data-cy="login-email" placeholder="entter email" />
      <input data-cy="login-password" placeholder="enter password"/>
      <button data-cy="login-submit" onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
