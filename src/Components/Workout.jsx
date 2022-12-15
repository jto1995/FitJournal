import React, { useEffect } from "react";
import Btn from "./Btn";
import WorkoutCard from "./WorkoutCard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Workout() {

  const params = useParams();
  const api = 'http://localhost:8080'
  const nav = useNavigate();
  const [workout, setWorkout] = useState();
  
  const handleClose = (e) => {
    e.preventDefault();
    nav('/post')
  }
  const getData = () => {
    axios
    .get(`${api}/workout/template/${params.id}`)
    .then((response) => {
      setWorkout(response.data)
      console.log(response.data)
    })
  }
  useEffect(() => {
    getData();
  }, [])

  
  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 mb-16 min-h-screen ">
      <div className="flex items-center justify-end">
      <Btn click={handleClose} btnText='X' class='p-2'/>
      </div>
      {workout?.map((work, index) => (
      <WorkoutCard 
      key={index}
      title={work.name}
      id={work.id}
      />
      ))}
    </div>
  );
}
