import React from 'react'
import Btn from './Btn'
import { useNavigate} from "react-router-dom";

export default function WorkoutModal({filteredWorkout, close, title}) {
    const nav = useNavigate();
    const openWorkoutPage = () => {
        nav(`/workout/${filteredWorkout[0].id}`)
      }
  
    return (
    <div className='fixed top-0 left-0 flex justify-center bg-black h-screen z-10 bg-opacity-50 '>
        <div className='flex flex-col justify-center bg-slate-200 w-screen h-1/2 p-6 mt-20 opacity-100 rounded-2xl'>
        <div className='flex justify-end justify-between items-center pb-8 border-b-4'>
        <p className='font-bold text-xl'>{title}</p>
        <Btn btnText="X" click={close}/>
        </div>
        
        <div className='flex flex-col mb-8 italic'>
            <div>
                {filteredWorkout?.map((data, i) => {
                return <p key={i}>3 X {data.name}</p>
            })}
            
            </div>
        </div>
            <Btn btnText="Start workout" click={openWorkoutPage} value={filteredWorkout[0].id}/>
        </div>
    </div>
  )
}
