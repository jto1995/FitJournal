import React from "react";
import WorkoutCard from "./WorkoutCard";

function Workout(workout) {
  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
      <div>
        <h3>{workout.name}</h3>
      </div>

      <WorkoutCard />
    </div>
  );
}

export default Workout;
