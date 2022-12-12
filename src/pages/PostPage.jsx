import { useState } from "react";
import PostForm from "../Components/PostForm";
import FoodLog from "../Components/FoodLog";
import WeightLog from "../Components/WeightLog";
import WorkoutLog from "../Components/WorkoutLog";


export default function PostPage() {
  const [showHide, setShowHide] = useState("");

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
        {showHide === "exercise" && <WorkoutLog />}
      </div>
    </div>
  );
}
