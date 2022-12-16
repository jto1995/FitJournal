import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../Components/Btn";
import Add from "../assets/Icons/add.png";
import Remove from "../assets/Icons/minus-sign.png";

export default function AddNewWorkout() {
  const [exercise, setExercise] = useState();
  const [query, setQuery] = useState("");
  const [addedExercises, setAddedExercises] = useState([]);

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
    const exerciseArr = [];

    addedExercises.forEach((element) => {
      exerciseArr.push(element.exercises_id);
    });

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

    navigate("/post/workout");
  };

  const handleAddClick = (exercise_name, workout_category, exercise_id, i) => {
    setAddedExercises([
      ...addedExercises,
      {
        name: exercise_name,
        workouts_category: workout_category,
        exercises_id: exercise_id,
      },
    ]);
    const newExercise = exercise;
    newExercise.splice(i, 1);
    const newState = newExercise;
    console.log(newState);
    setExercise([...newState]);
  };

  const handleRemoveClick = (i) => {
    const remove = addedExercises;
    remove.splice(i,1);
    const newState = remove;
    console.log(remove)
    setAddedExercises([...newState])
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
          <ul>
            <p className="font-bold">Added workouts</p>
            {addedExercises?.map((exercise, i) => {
              return (
                <div onClick={handleRemoveClick} key={i} className="flex justify-between my-4 border-2 p-4  bg-slate-100 shadow-2xl rounded-2xl" value={exercise.id}>
                  <div className="flex flex-col">
                    <li className="font-bold">{exercise.name}</li>
                    <li>{exercise.workouts_category}</li>
                  </div>
                      <img src={Remove} alt="" className="w-10 h-10 mt-1  " />
                </div>
              );
            })}
          </ul>
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
                  className='flex justify-between my-4 border-2 p-4 bg-slate-100 shadow-2xl rounded-2xl'
                  onClick={() =>
                    handleAddClick(
                      workout.name,
                      workout.category,
                      workout.id,
                      i
                    )
                  }
                >
                  <div className="flex flex-col" value={workout.id}>
                    <p id="name">{workout.name}</p>
                    <p id="category">{workout.category}</p>
                  </div>
                  <img src={Add} alt="add" className="w-10 h-10 mt-1" />
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
