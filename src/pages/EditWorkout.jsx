import React from "react";
import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Back from "../assets/Icons/back.png";
import Btn from "../Components/Btn";

export default function EditWorkout({workout_id}) {
  const [workout, setWorkout] = useState();
  const [id, setId] = useState();
  const api = "http://localhost:8080";
  const params = useParams();

  const getData = () => {
    axios.get(`${api}/workout/template/${params.id}`).then((response) => {
      setWorkout(response.data);
    });
  };
  
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
    .delete(`${api}/workout/log/${e.target.value}`) 
    .then(() =>{
        getData();
    })   
  }
  const deleteTemplate = (e) => {
    e.preventDefault();
    axios
    .delete(`${api}/workout/template/`)
  }

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 mb-10 min-h-screen ">
      <div className="flex items-center justify-end justify-between mt-4">
        <h1 className="font-bold text-3xl">Edit Workout</h1>
        <Link to="/post/workout">
          <img src={Back} className="w-10" alt="back" />
        </Link>
      </div>
      {workout?.map((work) => {
        return (
          <div className="flex justify-between my-4 border-2 p-4 bg-slate-100 shadow-2xl rounded-2xl">
            <div className="flex flex-col justify-between">
              <p className="font-bold text-2xl italic">{work.name}</p>
              <p>{work.category}</p>
            </div>
            <div className="flex justify-end">
              <Btn btnText="Delete Exercise" click={handleDelete} class="mr-4" value={work.id} />
            </div>
          </div>
        );
    })}

    <Btn btnText='Delete Template' click={deleteTemplate} value={workout_id}/>
    </div>
  );
}
