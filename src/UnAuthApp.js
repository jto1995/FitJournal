import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SiteHome from "./pages/SiteHome";
import SignUp from "./pages/SignUp";

function UnauthApp() {
  return (
    <Routes>
      <Route path="/" element={<SiteHome />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="*" element={<Login />}></Route>
    </Routes>
  );
}

export default UnauthApp;
