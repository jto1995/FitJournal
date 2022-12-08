import { useState } from "react";
import PostForm from "../Components/PostForm";
import WorkoutLog from "../Components/WorkoutLog";
import FoodLog from "../Components/FoodLog";
import WeightLog from "../Components/WeightLog";
import WorkoutLog2 from "../Components/WorkoutLog2";


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
      <div className="min-h-screen p-4 bg-gradient-to-r from-green-100 to-sky-300 pt-8 ">
        <PostForm
          change={(e) => {
            handleShowHide(e);
          }}
          
        />
              <div>
      </div>
        {showHide === "weight" && <WeightLog />}
        {showHide === "food" && <FoodLog />}
        {showHide === "exercise" && <WorkoutLog2 />}
      </div>
    </div>
  );
}
