import React, { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import Nav from "./Components/MobileNav";
import axios from "axios";

function AuthApp() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("jwt_token");
    logout();
    navigate("/");
  };
  const getUserInfo = () => {
    axios
    .get()
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage name={user.name}/>}>
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
      <Nav logout={handleLogOut} />
    </>
  );
}

export default AuthApp;
