import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Components/SiteHeader";
import './index.css'
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import SiteHome from "./pages/SiteHome";
import Login from "./pages/Login";
import ForgotLogin from "./pages/ForgotLogin";
import SignUp from "./pages/SignUp";
import { LoginContext } from "./context/LoginContext";
function App() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<SiteHome/>}>Site Home</Route>
        <Route path="/login" element={<Login/>}>Login</Route>
        <Route path="/login/forgot" element={<ForgotLogin/>}>Forgot Login</Route>
        <Route path="/signup" element={<SignUp/>}>Sign Up</Route>
      {/* </Routes>
      <Routes> */}
        <Route path="/feed" element={<HomePage />}>Landing Page</Route>
        <Route path="/post" element={<PostPage />}>Post</Route>
        <Route path="/profile/" element={<Profile />}>User</Route> 
        <Route path="/profile/:userId" element={<Profile />}>User</Route> 
        <Route path="/groups" element={<Groups />}>Groups</Route>   
        <Route path="/groups/:groupsId" element={<Groups />}>Groups</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
