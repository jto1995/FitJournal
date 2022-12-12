import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import Nav from "./Components/MobileNav";
import axios from "axios";
import Workout from "./Components/Workout";
import ComingSoon from "./pages/ComingSoon";

export default function AuthApp() {
  const { user, logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  const api = 'http://localhost:8080'
  const handleLogOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("jwt_token");
    logout();
    navigate("/");
  };

  const getData = () => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    axios
      .get(`${api}/user`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => setUserInfo(response));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage name={user.name}/>}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/groups/:groupsId" element={<Groups />}></Route>
        <Route path="*" element={<HomePage />}></Route>
        <Route path="/legs" element={<Workout />}></Route>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
      </Routes>
      <Nav logout={handleLogOut} />
    </>
  );
}
