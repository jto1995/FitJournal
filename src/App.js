import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import SiteHome from "./pages/SiteHome";
import Login from "./pages/Login";
import ForgotLogin from "./pages/ForgotLogin";
import SignUp from "./pages/SignUp";
import AuthProvider, { LoginContext } from "./context/LoginContext";
import axios from "axios";
import AuthContext from "./context/authContext";
import Nav from "./Components/MobileNav";
import UserHeader from "./Components/SiteHeader";


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      loadProfile(jwtToken)
    }
  }, [])

  const loadProfile = (jwtToken) => {
    axios
    .get(`http://localhost:8080/user/login`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      },
    })
    .then((response) => {
      setLoggedIn(true);
      setUser(response.data.user)

    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
      axios
        .post(`http://localhost:8080/login`, {
          email: e.target.email.value,
          password: e.target.password.value,
        })
        .then((response) => {
          if (response.data.token) {
            loadProfile(response.data.token);
            localStorage.setItem("jwt_token", response.data.token);
          }
          navigate('/feed')
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('jwt_token')
    navigate('/')
  }
  return (
    <>
    <UserHeader loggedIn={loggedIn}/>
      <Routes>
        <Route path="/" element={<SiteHome />}>
          Site Home
        </Route>
        <Route path="/login" element={<Login handleLogin={handleLogin}/>}>
          Login
        </Route>
        <Route path="/login/forgot" element={<ForgotLogin />}>
          Forgot Login
        </Route>
        <Route path="/signup" element={<SignUp />}>
          Sign Up
        </Route>
        <Route path="/feed" element={<HomePage logout={handleLogOut} />}>
          Landing Page
        </Route>
        <Route path="/post" element={<PostPage />}>
          Post
        </Route>
        <Route path="/profile/" element={<Profile />}>
          User
        </Route>
        <Route path="/profile/:userId" element={<Profile />}>
          User
        </Route>
        <Route path="/groups" element={<Groups />}>
          Groups
        </Route>
        <Route path="/groups/:groupsId" element={<Groups />}>
          Groups
        </Route>
      </Routes>
        <Nav loggedIn={loggedIn} logOut={handleLogOut}/>
        </>
  );
}