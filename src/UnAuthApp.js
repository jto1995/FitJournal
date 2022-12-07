import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import ForgotLogin from "./Components/ForgotLoginModal";
import SiteHome from "./pages/SiteHome";
import SignUp from "./pages/SignUp";

function UnauthApp() {


  return (
    <Routes>
      <Route path="/" element={<SiteHome />}>
        Site Home
      </Route>
      <Route path="/login" element={<Login />}>
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
        element={<Login/>}
      ></Route>
    </Routes>
  );
}

export default UnauthApp;
