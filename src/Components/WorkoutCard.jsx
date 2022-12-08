import React from 'react'
import Btn from './Btn'
import { useState } from 'react';

function WorkoutCard() {
    const [exerciseInput, setExerciseInput] = useState([
        { sets: "", reps: ""}
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
        <h2>exercise</h2>
        </div>
        <div>
            {exerciseInput.map((input, index) => {
            return (
            <form onSubmit={handleExerciseSubmit}>
            <div className="flex justify-evenly mb-6 mx-6 sm:mx-20" >
                <div className="flex flex-col">
                <label htmlFor="sets">Sets</label>
                <input
                  type="number"
                  className="py-1 pl-2 mb-6 italic w-1/2 rounded-xl"
                  name="sets"
                  placeholder="Sets"
                  onChange={(e) => handleExerciseChange(index, e)}
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
                </div>
                <div className="flex mt-8 pb-2 justify-evenly">
                  <Btn btnText="x" click={() => removeFields(index)} />
                  <Btn btnText="+" click={() => addFormFields()} />
                </div>
            </form>
            )})}
        </div>
    </div>
  )
}

export default WorkoutCard