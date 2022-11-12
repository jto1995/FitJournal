import { useState } from "react";
import Btn from "../Components/Btn/Btn";
import Nav from "../Components/Navigation/Nav";
import PostForm from "../Components/Posts/PostForm";
export default function PostPage() {

    const [foodInputFields, setFoodInputFields] = useState([
        { foodEntry: '' }
    ])

    const [exInputFields, setExInputFields] = useState([
        { sets: '', reps: '', exercise: ''}
    ])

    const handleFoodChange = (index, event) => {
        let data = [...foodInputFields];
        data[index][event.target.foodEntry] = event.target.value;
        setFoodInputFields(data)
    }

    const handleExerciseChange = (index, event) => {
        let data = [...exInputFields]
        data[index][event.target.sets] = event.target.value;
        setExInputFields(data)
    }

    return (
        <div>
            <div className="bg-sky-50 p-4 h-screen">
                <PostForm option1="Options" option2="Exercise" option3="Food"/>
                <div>
                    <h2 className="mb-2 font-bold">Logging Food</h2>
                    <p className="italic mb-2">Here you're able to log what you ate today and it will submit to our API to calculate to track your nutrition and store it into our server for your to keep track of! You will be able to see if you're hitting your macros each day!</p>
                        <div >
                            <form className="flex flex-col">
                            {foodInputFields.map((input, index) => {
                                return (
                                    <div className="flex flex-col"key={index}>
                                    <label htmlFor="entry">Food Item</label>
                                    <input
                                        name='food Entry'
                                        placeholder='Food Item'
                                        value={input.foodEntry}
                                        onChange={event => handleFoodChange(index, event)}
                                    />
                                    </div>
                                )
                                }, )}
                                <Btn btnText="Submit Food Entry"/>
                            </form>
                        </div>
                </div>
                <div className="flex flex-col justify-center">
                    <PostForm option1="Upper body" option2="Lower body" option3="Cardio & Abs"/>
                    <div>
                        <form className="flex flex-col">
                        {exInputFields.map((input, index) => {
                                return (
                                    <div className="flex flex-col mb-6 "key={index}>
                                        <input
                                            className="mt-2"
                                            name='entry'
                                            placeholder='Exercise'
                                            value={input.exercise}
                                            onChange={event => handleExerciseChange(index, event)}
                                        />
                                        <input
                                            className="mt-2"
                                            name='entry'
                                            placeholder='Sets'
                                            value={input.sets}
                                            onChange={event => handleExerciseChange(index, event)}

                                        />
                                        <input
                                            className="mt-2"
                                            name='entry'
                                            placeholder='Reps'
                                            value={input.reps}
                                            onChange={event => handleExerciseChange(index, event)}
                                        />
                                        <div className="flex justify-evenly mt-4">
                                            <button className="mx-6">+</button>
                                            <button className="mx-6">🗑️</button>
                                        </div>
                                    </div>
                                )
                                }, )}
                            <Btn className='mb-6'btnText="Submit Exercise Log"/>
                        </form>
                    </div>
                </div>

            </div>
<div>
        
</div>
        <Nav/>
        </div>
    )
}