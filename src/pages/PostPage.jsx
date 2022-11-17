import { useState } from "react";
import axios from "axios";
import Btn from "../Components/Btn";
import Nav from "../Components/MobileNav";
import PostForm from "../Components/PostForm";
import UserHeader from "../Components/UserHeader";
import LineChart from "../charts/LineChart";
import { UserData, UserNutrition } from "../data/Data";
import PolarChart from "../charts/PolarChart";

export default function PostPage() {

  const [userNutrition, setUserNutrtion] = useState({
    labels: UserNutrition.map((data) => data.type),
    datasets: [
      {
        label:"Nutrtion",
        data: UserNutrition.map((data) => data.amount),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor:"black"
      }
    ]
  })
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "Weight",
        data: UserData.map((data) => data.weight),
        backgroundColor: [
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [foodInput, setFoodInput] = useState([{ food: "" }]);
  const [exerciseInput, setExerciseInput] = useState([
    { sets: "", reps: "", exercise: "" },
  ]);
  const [weightInput, setWeightInput] = useState([{ weight: "" }]);
  const handleWeightChange = (index, e) => {
    let data = [weightInput];
    data[index][e.target.weight] = e.target.value;
    setWeightInput(data);
  };

  const handleFoodChange = (index, e) => {
    let data = [foodInput];
    data[index][e.target.foodEntry] = e.target.value;
    setFoodInput(data);
  };

  const handleExerciseChange = (index, e) => {
    let data = [exerciseInput];
    data[index][e.target.sets] = e.target.value;
    setExerciseInput(data);
  };

  const handleExerciseSubmit = (e) => {
    e.preventDefault();
  };

  const handleFoodSubmit = (e) => {
    e.preventDefault();
  };
  const handleWeightSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <UserHeader />
      <div className="bg-gradient-to-r from-green-100 to-sky-300 p-4">
        <PostForm option1="Exercise" option2="Food" option3="Weight"/>
        <div className="flex flex-col justify-center justify-evenly sm:flex-row">
          <form className="flex flex-col" onSubmit={handleWeightSubmit}>
          <h2 className="mb-4 font-bold text-2xl">Weight Log</h2>
            {weightInput.map((input, index) => {
              return (
                <input
                  className="mb-6 py-1 pl-2 italic rounded-xl"
                  type="number"
                  placeholder="Weight in lbs"
                  value={input.weight}
                  onChange={(e) => handleWeightChange(index, e)}
                />
              );
            })}
            <Btn btnText="Submit" />
          </form>
          <div className="my-4 sm:w-2/3">
          <LineChart chartData={userData}/>
          </div>
          {/* Line chart here for weight gain/loss */}
        </div>
        <div className="flex flex-col md:flex-row ml-6 ">
          <div className="flex flex-col md:w-1/3">
          <h2 className="mb-2 font-bold">Food Log</h2>
          <p className="italic mb-2">
            Here you're able to log what you ate today and it will submit to our
            API to calculate to track your nutrition and store it into our
            server for your to keep track of! You will be able to see if you're
            hitting your macros each day!
          </p>
            <form onSubmit={handleFoodSubmit} className="flex flex-col">
              {foodInput.map((input, index) => {
                return (
                  <div className="flex flex-col" key={index}>
                    <label htmlFor="entry">Food Item</label>
                    <input
                      className="mb-6 py-1 pl-2 italic rounded-xl"
                      name="food Entry"
                      placeholder="Food Item"
                      value={input.food}
                      onChange={(e) => handleFoodChange(index, e)}
                    />
                  </div>
                );
              })
            }
              <div className="flex flex-col justify-evenly">
                <div className="flex flex-col justify-center justify-between my-5">
                  <Btn btnText="Submit Food Entry" />
                </div>
                <div className="flex flex-col mb-5">
                  <Btn btnText="View your daily Nutrition" />
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-3/5 ml-10">
            <PolarChart chartData={userNutrition}/>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <PostForm
            option1="Upper body"
            option2="Lower body"
            option3="Cardio & Abs"
          />
          <div>
            <form onSubmit={handleExerciseSubmit} className="flex flex-col">
              {exerciseInput.map((input, index) => {
                return (
                  <div className="flex flex-col mb-6 " key={index}>
                    <input
                      className="mb-6 py-1 pl-2 italic rounded-xl"
                      name="exercise"
                      placeholder="Exercise"
                      value={input.exercise}
                      onChange={(e) => handleExerciseChange(index, e)}
                    />
                    <input
                      type="number"
                      className="mb-6 py-1 pl-2 italic rounded-xl"
                      name="sets"
                      placeholder="Sets"
                      value={input.sets}
                      onChange={(e) => handleExerciseChange(index, e)}
                    />
                    <input
                      type="number"
                      className="mb-6 py-1 pl-2 italic rounded-xl"
                      name="reps"
                      placeholder="Reps"
                      value={input.reps}
                      onChange={(e) => handleExerciseChange(index, e)}
                    />
                    <div className="flex justify-evenly mt-4">
                      <Btn btnText="+" />
                      <Btn btnText="🗑️" />
                    </div>
                  </div>
                );
              })}
              <div className="flex justify-center mb-20 sm:mb-4 ">
                <Btn btnText="Submit Exercise Log" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
