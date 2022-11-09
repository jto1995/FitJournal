import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./Components/Header/Header";
import './App.css'
import HomePage from "./pages/HomePage";
import Nav from "./Components/Navigation/Nav";
import PostPage from "./pages/PostPage";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Groups from "./pages/Groups";
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>Home</Route>
        <Route path="/post" element={<PostPage />}>Post</Route>
        <Route path="/settings" element={<Settings />}>Settings</Route> 
        <Route path="/profile/" element={<Profile />}>User</Route> 
        <Route path="/profile/:userId" element={<Profile />}>User</Route> 
        <Route path="/groups" element={<Groups />}>Groups</Route>   
        <Route path="/groups/:groupsId" element={<Groups />}>Groups</Route>
      </Routes>
      <Nav/>
    </BrowserRouter>
  );
}

export default App;
