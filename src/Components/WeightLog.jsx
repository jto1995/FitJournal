import React, { useState, useEffect } from "react";
import Btn from "./Btn";
import LineChart from "../charts/LineChart";
import axios from "axios";
import { Link } from "react-router-dom";

export default function WeightLog() {
  
  const [userData, setUserData] = useState();

  const api = 'http://localhost:8080'

  function formatDate(value) {
    const length = 10;
    const shortString = value.substring(0, length);
    return shortString;
  }

  const handleUserData = (chartData) =>{
    setUserData({
      labels: chartData
        .sort(function(a, b){return a-b})
        ?.map((data) => formatDate(data.created_at)),
      datasets: [
        {
          label: "Weight",
          data: chartData?.map((data) => data.weight),
          backgroundColor: ["#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    })}
    
  const getData = () => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    axios
      .get(`${api}/weight/`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        handleUserData(response.data);
        console.log(response.data)
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const handleWeightSubmit = (e) => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    e.preventDefault();
    const weightPost = {
      weight: e.target.weight.value,
    };
    axios
      .post(`${api}/weight/`, weightPost, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then()
      getData();
  };

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
    <div className="flex flex-col justify-center justify-evenly p-4">
      <div className="sm:flex">
        <Link to='/post'>⬅️</Link>
        <form className="flex flex-col sm:" onSubmit={handleWeightSubmit}>
          <h2 className="mb-4 text-2xl font-bold">Weight Log</h2>
              <input
                className="py-1 pl-2 mb-6 italic rounded-xl"
                type="number"
                name="weight"
                placeholder="Weight in lbs"
              />
          <Btn btnText="Submit" />
        </form>
        <div className="my-4 sm:w-2/3">
          {userData !== undefined ? <LineChart chartData={userData} /> : null}
        </div>
      </div>
    </div>
    </div>
  );
}
