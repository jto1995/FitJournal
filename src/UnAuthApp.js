import React, { useContext, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import Login from "./pages/Login";
import ForgotLogin from "./Components/ForgotLoginModal";
import SiteHome from "./pages/SiteHome";
import SignUp from "./pages/SignUp";
import axios from "axios";

function UnauthApp() {
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/user/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((response) => {
        if (response.data.token) {
          // loadProfile(response.data.token);
          localStorage.setItem("jwt_token", response.data.token);
        }
        login();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Routes>
      <Route path="/" element={<SiteHome />}>
        Site Home
      </Route>
      <Route path="/login" element={<Login handleLogin={handleLogin} />}>
        Login
      </Route>
      <Route path="/login/forgot" element={<ForgotLogin />}>
        Forgot Login
      </Route>
      <Route path="/signup" element={<SignUp />}>
        Sign Up
      </Route>
      <Route
        path="*"
        element="You dont have authorization to access this"
      ></Route>
    </Routes>
  );
}

export default UnauthApp;
