import { useState } from "react";
import Nav from "../Components/MobileNav";
import PostForm from "../Components/PostForm";
import UserHeader from "../Components/UserHeader";
import WorkoutLog from "../Components/WorkoutLog";
import FoodLog from "../Components/FoodLog";
import WeightLog from "../Components/WeightLog";

export default function PostPage() {
  const [showHide, setShowHide] = useState("");

  const handleShow = (e) => {
    setShowHide(e.target.value);
    if (e.target.value === "Weight Log") {
    } else if (e.target.value === "Food Log") {
    } else if (e.target.value === "Exercise Log") {
    }
  };
  const handleShowHide = (e) => {
    const getOption = e.target.value;
    setShowHide(getOption);
  };

  return (
    <div>
      <UserHeader />
      <div className="min-h-screen p-4 bg-gradient-to-r from-green-100 to-sky-300 pt-8 ">
        <PostForm
          change={(e) => {
            handleShowHide(e);
          }}
        />
        {showHide === "weight" && <WeightLog />}
        {showHide === "food" && <FoodLog />}
        {showHide === "exercise" && <WorkoutLog />}
      </div>
      <Nav />
    </div>
  );
}
