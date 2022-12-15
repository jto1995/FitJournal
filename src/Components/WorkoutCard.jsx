import React from "react";
import Btn from "./Btn";
import { useState } from "react";
import axios from "axios";

export default function WorkoutCard({title, id}) {
  const api = 'http://localhost:8080'
  const [exerciseInput, setExerciseInput] = useState([
    { set: "", reps: "", weight: "" },
  ]);

  const handleExerciseChange = (index, e) => {
    let data = [exerciseInput];
    data[index] = e.target.value;
    setExerciseInput(data);
  };

  const handleExerciseSubmit = (e, index) => {
    e.preventDefault();
    const workoutLog = [{ 
      sets: e.target.set.value,
      reps: e.target.reps.value,
      weight: e.target.weight.value,
      exercise_id: e.target.btn.value
    }]
    console.log(workoutLog)
    axios
    .post(`${api}/workout/log`, workoutLog)
  };
  const addFormFields = () => {
    const newField = { exercise: "", set: "", reps: "" };
    setExerciseInput([...exerciseInput, newField]);
  };
  

  return (
    <div>
      <div className="mb-4">
        <h2 className="font-bold italic">{title}</h2>
      </div>
      <div>
        <form onSubmit={handleExerciseSubmit} className='bg-slate-300 rounded-2xl p-4 mb-6'>
        {exerciseInput.map((input, index) => {
          return (
              <div className="flex justify-evenly mx-6 sm:mx-20 ">
                <div className="flex flex-col">
                  <label htmlFor="set">Set</label>
                  <input
                    type="number"
                    className="py-1 pl-2 mb-6 italic w-1/2 rounded-xl"
                    name='set'
                    defaultValue= '1'
                    onChange={(e) => handleExerciseChange(input, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="reps">Reps</label>
                  <input
                    type="number"
                    className="py-1 pl-2 mb-6 w-1/2 italic rounded-xl"
                    name="reps"
                    placeholder="Reps"
                    onChange={(e) => handleExerciseChange(index, e)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="reps">Weight</label>
                  <input
                    type="number"
                    className="py-1 pl-2 mb-6 w-2/3 italic rounded-xl"
                    name="weight"
                    placeholder="Weight"
                    onChange={(e) => handleExerciseChange(index, e)}
                  />
                </div>
                
                {/* <div
                  className="h-12 my-4 text-center"
                  onClick={() => addFormFields()}
                >
                  +
                </div> */}
              </div>
          );
        })}
        <div className="flex justify-end mt-6">
        <Btn 
          btnText="Submit"
          id="btn"
          value={id}
        />
        </div>
        </form>
      </div>
    </div>
  );
}

