import React, { useState } from "react";
import Btn from "./Btn";
import LineChart from "../charts/LineChart";
import axios from "axios";
import { useEffect } from "react";

export default function WeightLog() {
  const [userData, setUserData] = useState();
  const [weightInput, setWeightInput] = useState([{ weight: "" }]);
  const api = 'http://localhost:8080'

  function formatDate(value) {
    const length = 10;
    const shortString = value.substring(0, length);
    return shortString;
  }

  const handleUserData = (chartData) =>{
    setUserData({
      labels: chartData
        .sort((a, b) => b.value - a.value)
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
      .get(`${api}/user/weight/`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        handleUserData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, );


  const handleWeightSubmit = (e) => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    e.preventDefault();
    const weightPost = {
      weight: e.target.weight.value,
    };
    axios
      .post(`${api}/user/weight/`, weightPost, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then()
      getData();
  };

  return (
    <div className="flex flex-col justify-center justify-evenly sm:flex-row">
      <div className="sm:flex">
        <form className="flex flex-col sm:" onSubmit={handleWeightSubmit}>
          <h2 className="mb-4 text-2xl font-bold">Weight Log</h2>
          {weightInput?.map((input, index) => {
            return (
              <input
                className="py-1 pl-2 mb-6 italic rounded-xl"
                type="number"
                key={input.weight}
                name="weight"
                placeholder="Weight in lbs"
              />
            );
          })}
          <Btn btnText="Submit" />
        </form>
        <div className="my-4 sm:w-2/3">
          {userData !== undefined ? <LineChart chartData={userData} /> : null}
        </div>
      </div>
    </div>
  );
}
