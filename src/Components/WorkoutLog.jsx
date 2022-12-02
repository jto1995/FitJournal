import React, { useState } from "react";
import Btn from "./Btn";

export default function WorkoutLog() {
  const [exerciseInput, setExerciseInput] = useState([
    { sets: "", reps: "", exercise: "" },
  ]);

  const handleExerciseChange = (index, e) => {
    let data = [exerciseInput];
    data[index][e.target.sets] = e.target.value;
    setExerciseInput(data);
  };

  const handleExerciseSubmit = (e) => {
    e.preventDefault();
  };
  const addFormFields = () => {
    const newField = { exercise: "", sets: "", reps: "" };
    setExerciseInput([...exerciseInput, newField]);
  };

  const removeFields = (index) => {
    const data = [...exerciseInput];
    data.splice(index, 1);
    setExerciseInput(data);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleExerciseSubmit} className="flex flex-col">
            <div className="flex justify-center mb-6">
            <Btn btnText="+" click={() => addFormFields()} />
            </div>
          {exerciseInput.map((input, index) => {
            return (
              <div className="flex flex-col justify-evenly mb-6 mx-6 sm:mx-20" key={index}>
                <div className="flex flex-col">
                <label htmlFor="exercise">Exercise</label>
                <input
                  className="py-1 pl-2 mb-6 italic rounded-xl"
                  name="exercise"
                  placeholder="Exercise"
                  onChange={(e) => handleExerciseChange(index, e)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="sets">Sets</label>
                <input
                  type="number"
                  className="py-1 pl-2 mb-6 italic rounded-xl"
                  name="sets"
                  placeholder="Sets"
                  onChange={(e) => handleExerciseChange(index, e)}
                />
                </div>
                <div className="flex flex-col">
                <label htmlFor="reps">Reps</label>
                <input
                  type="number"
                  className="py-1 pl-2 mb-6 italic rounded-xl"
                  name="reps"
                  placeholder="Reps"
                  onChange={(e) => handleExerciseChange(index, e)}
                />
                </div>
    

                <div className="flex mt-8 pb-2 justify-evenly">
                  <Btn btnText="x" click={() => removeFields(index)} />
                  <Btn btnText="+" click={() => addFormFields()} />
                </div>
              </div>
            );
          })}
          <div className="flex justify-center justify-evenly mb-20 sm:mb-4 ">
            <Btn btnText="Submit Exercise Log" />
          </div>
        </form>
      </div>
    </div>
  );
}
