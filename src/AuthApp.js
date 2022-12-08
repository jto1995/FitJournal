import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import Nav from "./Components/MobileNav";
import axios from "axios";
import PostModal from "./Components/PostModal";
import WorkoutLog2 from "./Components/WorkoutLog2";
import Legs from "./Components/Legs";
import WorkoutCard from "./Components/WorkoutCard";

export default function AuthApp() {
  const { user, logout } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("jwt_token");
    logout();
    navigate("/");
  };

  const getData = () => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    axios
      .get(`http://localhost:8080/user`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => 
      setUserInfo(response)
      )
  }

  useEffect(() => {
    getData();
  }, [])
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage name={user.name}/>}>
          Landing Page
        </Route>
        <Route path="/post" element={<PostPage />}>
          Post
        </Route>
        <Route path="/profile/:id" element={<Profile />}>
          User
        </Route>
        <Route path="/groups" element={<Groups />}>
          Groups
        </Route>
        <Route path="/groups/:groupsId" element={<Groups />}>
          Groups
        </Route>
        <Route path="*" element={<HomePage/>}></Route>
        <Route path="/legs" element={<WorkoutCard/>}></Route>
      </Routes>
      <Nav logout={handleLogOut} />
    </>
  );
}

