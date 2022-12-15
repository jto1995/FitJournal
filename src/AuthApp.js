import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AuthContext from "./context/authContext";
import PostPage from "./pages/PostPage";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
import HomePage from "./pages/HomePage";
import Nav from "./Components/Nav";
import axios from "axios";
import Workout from "./Components/Workout";
import ComingSoon from "./pages/ComingSoon";
import AddNewWorkout from "./pages/AddNewWorkout";
import FoodLog from "./Components/FoodLog";
import WorkoutLog from "./Components/WorkoutLog";
import WeightLog from "./Components/WeightLog";

export default function AuthApp() {
  const { logout } = useContext(AuthContext);
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
      .then((response) => {
        setUserInfo(response.data)
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/post/food" element={<FoodLog />}></Route>
        <Route path="/post/workout" element={<WorkoutLog />}></Route>
        <Route path="/post/weight" element={<WeightLog />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/workout/:id" element={<Workout/>}></Route>
        <Route path="/add-workout/" element={<AddNewWorkout/>}></Route>
        <Route path="/groups/:groupsId" element={<Groups />}></Route>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
      </Routes>
      <Nav logout={handleLogOut} user={userInfo} />
    </>
  );
}
