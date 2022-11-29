import React, { useState } from "react";
import Btn from "./Btn";
import { UserData } from "../data/Data";
import LineChart from "../charts/LineChart";

export default function WeightLog() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Weight",
        data: UserData.map((data) => data.weight),
        backgroundColor: ["#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [weightInput, setWeightInput] = useState([{ weight: "" }]);

  const handleWeightChange = (index, e) => {
    let data = [weightInput];
    data[index][e.target.weight] = e.target.value;
    setWeightInput(data);
  };

  const handleWeightSubmit = (e) => {
    e.preventDefault();
    const weightPost = {
      weight: e.target.value,
    };
    // axios.post
    // .then
  };

  return (
    <div className="flex flex-col justify-center justify-evenly sm:flex-row">
      <div className="sm:flex">
        <form className="flex flex-col sm:" onSubmit={handleWeightSubmit}>
          <h2 className="mb-4 text-2xl font-bold">Weight Log</h2>
          {weightInput.map((input, index) => {
            return (
              <input
                className="py-1 pl-2 mb-6 italic rounded-xl"
                type="number"
                key={input.weight}
                placeholder="Weight in lbs"
                value={input.weight}
                onChange={(e) => handleWeightChange(index, e)}
              />
            );
          })}
          <Btn btnText="Submit" />
        </form>
        <div className="my-4 sm:w-2/3">
          <LineChart chartData={userData} />
        </div>
      </div>
    </div>
  );
}
