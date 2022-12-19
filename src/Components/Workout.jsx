import React, { useEffect } from "react";
import Btn from "./Btn";
import WorkoutCard from "./WorkoutCard";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Back from '../assets/Icons/back.png'


export default function Workout() {

  const params = useParams();
  const api = 'http://localhost:8080'
  const [workout, setWorkout] = useState();
  
  const getData = () => {
    axios
    .get(`${api}/workout/template/${params.id}`)
    .then((response) => {
      setWorkout(response.data)
    })
  }
  useEffect(() => {
    getData();
  }, [])

  
  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 mb-10 min-h-screen ">
      <div className="flex items-center justify-end">
      <Link to='/post/workout'><img src={Back} className='w-10' alt="back" /></Link>
      </div>
      {workout?.map((work, index) => (
      <WorkoutCard 
      key={index}
      title={work.name}
      id={work.exercises_id}
      workout_id={work.workouts_id}
      />
      ))}
    </div>
  );
}
