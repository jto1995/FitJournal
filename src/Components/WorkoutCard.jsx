import React from 'react'
import Btn from './Btn'
import { useState } from 'react';

function WorkoutCard() {
    const [value, setValue] = useState(1)
    const [exerciseInput, setExerciseInput] = useState([
        { set: "", reps: "", weight:""}
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
        setExerciseInput([...exerciseInput , newField]);
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
            <div className="flex justify-evenly mx-6 sm:mx-20" >
                <div className="flex flex-col">
                <label htmlFor="set">Set</label>
                <input
                  type="number"
                  className="py-1 pl-2 mb-6 italic w-1/2 rounded-xl"
                  name="set"
                  value={value}
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
                <div className="flex flex-col">
                <label htmlFor="reps">Weight</label>
                <input
                  type="number"
                  className="py-1 pl-2 mb-6 w-2/3 italic rounded-xl"
                  name="Weight"
                  placeholder="Weight"
                  onChange={(e) => handleExerciseChange(index, e)}

                />
                </div>
                  <Btn btnText="+" class="h-12 my-4 text-center"click={() => addFormFields()} />
                </div>
            </form>
            )})}
        </div>
    </div>
  )
}

export default WorkoutCard