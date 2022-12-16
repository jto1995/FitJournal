import React, { useState } from "react";
import Btn from "../Components/Btn";
import PolarChart from "../charts/PolarChart";
import { UserNutrition } from "../data/Data";
import { Link } from "react-router-dom";
import Back from '../assets/Icons/back.png';
export default function FoodLog() {
  const [foodInput, setFoodInput] = useState([{ food: "" }]);

  const [userNutrition, setUserNutrtion] = useState({
    labels: UserNutrition.map((data) => data.type),
    datasets: [
      {
        label: "Nutrtion",
        data: UserNutrition.map((data) => data.amount),
        backgroundColor: ["#ecf0f1", "#50AF95", "#f3ba2f", "#2a71d0"],
        borderColor: "black",
      },
    ],
  });

  const handleFoodChange = (index, e) => {
    let data = [foodInput];
    data[index][e.target.foodEntry] = e.target.value;
    setFoodInput(data);
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 min-h-screen">
      <div className="flex flex-col my-4">
        <div className="flex flex-col mx-2 mt-2">
          <div className="flex justify-between justify-center items-center mb-4">
          <h2 className="mb-2 font-bold text-2xl">Food Log ---- Coming Soon</h2>
        <Link to='/post'><img src={Back} className='w-10 mb-4' alt="" /></Link>
        </div>
          <p className="mb-2 italic">
            Here you're able to log what you ate today and it will submit to our
            API to calculate to track your nutrition and store it into our
            server for your to keep track of! You will be able to see if you're
            hitting your macros each day!
          </p>
          <form onSubmit={handleFoodSubmit} className="flex flex-col">
            {foodInput.map((input, index) => {
              return (
                <div className="flex flex-col" key={index}>
                  <label htmlFor="food Entry" className="font-bold mb-4">
                    Food Item
                  </label>
                  <input
                    className="py-1 pl-2 mb-6 italic rounded-xl"
                    name="food Entry"
                    placeholder="Food Item"
                    value={input.food}
                    onChange={(e) => handleFoodChange(index, e)}
                  />
                </div>
              );
            })}
            <div className="flex flex-col justify-evenly">
              <div className="flex flex-col justify-center justify-between my-5">
                <Btn btnText="Submit Food Entry" />
              </div>
              <div className="flex flex-col mb-5">
                <Btn btnText="View your daily Nutrition" />
              </div>
            </div>
          </form>
          <div className="ml-10 pb-10">
            <PolarChart chartData={userNutrition} />
          </div>
        </div>
      </div>
    </div>
  );
}

