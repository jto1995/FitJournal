import React from 'react'
import Btn from './Btn'

export default function Legs(legs) {
  return (
    <div className='fixed top-0 left-0 flex justify-center bg-black h-screen z-10 bg-opacity-50 '>
        <div className='flex flex-col justify-center bg-slate-200 w-screen h-1/2 p-6 my-20 opacity-100'>
        <div className='flex justify-end justify-between items-center pb-8'>
        <p className='font-bold text-xl'>Legs</p>
        <Btn btnText="X" click={legs.close}/>
        </div>
        
        <div className='flex flex-col mb-6'>
            <div>
                <p>3 X Squats Barbell(Barbell)</p>
            </div>
            <div>
                <p>3 X Leg Extention(Machine)</p>
            </div>
            <div>
                <p>3 X Flat Leg Raise</p>
            </div>
            <div>
                <p>3 X Standing Calf Raise</p>
            </div>
        </div>
        <Btn btnText="Start workout" />
        </div>
    </div>
  )
}
