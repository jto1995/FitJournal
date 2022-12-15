import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../Components/Btn";

export default function AddNewWorkout() {
  const [exercise, setExercise] = useState();
  const [query, setQuery] = useState("");

  const navigate = useNavigate();
  const api = "http://localhost:8080";

  const getData = () => {
    axios.get(`${api}/workout/exercise`).then((response) => {
      setExercise(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    e.preventDefault();
    // Getting Values and pushing into array
    const exerciseElementArray = e.target.exercise;
    console.log(exerciseElementArray)
    const exerciseArr = [];
    
    exerciseElementArray.forEach((element) => {
      if (element.checked === true) {
        exerciseArr.push(element.value);
      }
    });
    console.log(exerciseArr)
    const newWorkout = {
      workout_name: e.target.workout.value,
      exercises_ids: exerciseArr,
    };
    axios
      .post(`${api}/workout`, newWorkout, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then();
    navigate("/post");
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
      <div className=" p-10 mb-10 min-h-screen ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="italic font-bold" htmlFor="workout">
              Please name your workout!
            </label>
            <input
              className="my-2 rounded-2xl h-8 p-4"
              type="text"
              name="workout"
              placeholder="Workout Name"
            />
          </div>
          <h2 className="font-bold text-2xl italic">List of Exercises</h2>
          <input
            className="w-full rounded-2xl p-2 my-2"
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
          {exercise
            ?.sort((a, b) => a.name.localeCompare(b.name))
            .filter((workout) => {
              return (
                workout.name.toLowerCase().includes(query) ||
                workout.category.toLowerCase().includes(query)
              );
            })
            .map((workout, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between my-4 border-2 p-4 bg-slate-100 shadow-2xl rounded-2xl"
                >
                  <div className="flex flex-col">
                    <p>{workout.name}</p>
                    <p>{workout.category}</p>
                  </div>
                  <input
                    className="h-10 w-10 mt-1"
                    value={workout.id}
                    name="exercise"
                    type="checkbox"
                  />
                </div>
              );
            })}
          <div className="flex justify-end mt-8 mb-4">
            <Btn btnText="Add Workout" />
          </div>
        </form>
      </div>
    </div>
  );
}
