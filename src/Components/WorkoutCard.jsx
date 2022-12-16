import React from "react";
import Btn from "./Btn";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function WorkoutCard({ title, id, workout_id }) {
  const api = "http://localhost:8080";

  const notify = () => toast(`Your log has been submitted`);

  const handleExerciseSubmit = (e) => {
    const jwtToken = sessionStorage.getItem("jwt_token")
    e.preventDefault();
    const workoutLog = {  
      sets: e.target.set.value,
      reps: e.target.reps.value,
      weight: e.target.weight.value,
      exercise_id: e.target.btn.value,
      workouts_id: e.target.workout_id.value,
    };
    console.log(workoutLog);
    axios.post(`${api}/workout/log`, workoutLog, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }).then(() => {
      notify();
    });
  };

  // add form field function adding in later once i get everthing to work first
  // const [exerciseInput, setExerciseInput] = useState([
  //   { set: "", reps: "", weight: "" },
  // ]);
  // const handleExerciseChange = (index, e) => {
  //     let data = [exerciseInput];
  //     data[index] = e.target.value;
  //     setExerciseInput(data);
  //   };

  //   const addFormFields = () => {
  //       const newField = { exercise: "", set: "", reps: "" };
  //       setExerciseInput([...exerciseInput, newField]);
  //     };

  return (
    <div className="mb-">
      <div className="mb-4">
        <h2 className="font-bold italic">{title}</h2>
      </div>
      <div>
        <form
          onSubmit={handleExerciseSubmit}
          className="bg-slate-300 rounded-2xl p-4 mb-6 shadow-2xl"
        >
          <div className="flex justify-evenly mx-6 sm:mx-20">
            <div className="flex flex-col">
              <input
                type="text"
                className="hidden"
                name="workout_id"
                defaultValue={workout_id}
              />
              <label htmlFor="set">Set</label>
              <input
                type="number"
                className={`py-1 pl-2 mb-6 italic w-1/2 rounded-xl shadow-2xl`}
                name="set"
                defaultValue="1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reps">Reps</label>
              <input
                type="number"
                className={`py-1 pl-2 mb-6 italic w-2/3 rounded-xl shadow-2xl`}
                name="reps"
                placeholder="Reps"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="reps">Weight</label>
              <input
                type="number"
                className={`py-1 pl-2 mb-6 italic w-2/3 rounded-xl shadow-2xl `}
                name="weight"
                placeholder="Weight"
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Btn btnText="Submit" id="btn" value={id} />
          </div>
        </form>
        <Toaster position="top-center" reverseOrder={true} />
      </div>
    </div>
  );
}

// {/* {exerciseInput.map((input, index) => {
//   return ( */}
//   {/* add more field for post request later */}
//   {/* <div
//     className="h-12 my-4 text-center"
//     onClick={() => addFormFields()}
//   >
//     +
//   </div> */}
