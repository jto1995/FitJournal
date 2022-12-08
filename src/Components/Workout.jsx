import React from 'react'
import WorkoutCard from './WorkoutCard'

function Workout(workout) {
  return (
    <div>
        <div>
        <h3>{workout.name}</h3>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>

        <WorkoutCard/>
    </div>
  )
}

export default Workout