import { useState } from "react";
import Btn from "../Components/Btn";
import Nav from "../Components/MobileNav";
import PostForm from "../Components/PostForm";
import UserHeader from "../Components/UserHeader";
export default function PostPage() {

    const [foodInput, setFoodInput] = useState([
        { food:'' }
    ]);
    const [exerciseInput, setExerciseInput] = useState([
        { sets:'', reps:'', exercise:''}
    ]);

    const handleFoodChange = (index, event) => {
        let data = [...foodInput];
        data[index][event.target.foodEntry] = event.target.value;
        setFoodInput(data)
    };

    const handleExerciseChange = (index, event) => {
        let data = [...exerciseInput]
        data[index][event.target.sets] = event.target.value;
        setExerciseInput(data)
    }; 

    return (
        <div>
            <UserHeader/>
            <div className="bg-gradient-to-r from-green-100 to-sky-300 p-4 h-screen">
                <PostForm option1="Options" option2="Exercise" option3="Food"/>
                <div>
                    <h2 className="mb-2 font-bold">Logging Food</h2>
                    <p className="italic mb-2">Here you're able to log what you ate today and it will submit to our API to calculate to track your nutrition and store it into our server for your to keep track of! You will be able to see if you're hitting your macros each day!</p>
                    <div >
                        <form className="flex flex-col">
                            {foodInput.map((input, index) => {
                                return (
                                    <div className="flex flex-col"key={index}>
                                    <label htmlFor="entry">Food Item</label>
                                    <input
                                        className='mb-6 py-1 pl-2 italic rounded-xl'
                                        name='food Entry'
                                        placeholder='Food Item'
                                        value={input.food}
                                        onChange={event => handleFoodChange(index, event)}
                                    />
                                    </div>
                                )
                                }, )}
                            <div className="flex flex-col md:flex-row justify-evenly">
                                <div className="flex flex-col justify-center justify-between my-5">
                                    <Btn btnText="Submit Food Entry"/>
                                </div>
                                <div className="flex flex-col mb-5 md:mt-5" >
                                    <Btn btnText="View your daily Nutrition"/>
                                </div>
                            </div>          
                        </form>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <PostForm option1="Upper body" option2="Lower body" option3="Cardio & Abs"/>
                    <div>
                        <form className="flex flex-col">
                        {exerciseInput.map((input, index) => {
                                return (
                                    <div className="flex flex-col mb-6 "key={index}>
                                        <input
                                            className='mb-6 py-1 pl-2 italic rounded-xl'
                                            name='exercise'
                                            placeholder='Exercise'
                                            value={input.exercise}
                                            onChange={event => handleExerciseChange(index, event)}
                                        />
                                        <input
                                            className='mb-6 py-1 pl-2 italic rounded-xl'
                                            name='sets'
                                            placeholder='Sets'
                                            value={input.sets}
                                            onChange={event => handleExerciseChange(index, event)}
                                        />
                                        <input
                                            className='mb-6 py-1 pl-2 italic rounded-xl'
                                            name='reps'
                                            placeholder='Reps'
                                            value={input.reps}
                                            onChange={event => handleExerciseChange(index, event)}
                                        />
                                        <div className="flex justify-evenly mt-4">
                                            <Btn btnText='+' />
                                            <Btn btnText='🗑️' />
                                        </div>
                                    </div>
                                )
                                }, )}
                            <div className="flex justify-center ">
                                <Btn btnText="Submit Exercise Log"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Nav/>
        </div>
    )
}