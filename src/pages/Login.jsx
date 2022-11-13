import Btn from "../Components/Btn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Google from '../assets/Icons/google.png'

export default function Login () {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleChangeEmail = (event) => 
    setEmail(event.target.value);
    const handleChangePassword = (event) =>
    setPassword(event.target.value);


    const isFormValid = () => {
        if(!email) {
            return false;
        }
        if(!password) {
            return
        }
        return true;
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(isFormValid()){
        navigate('/feed')
    } else {
        alert('Invalid login information')
    }
};
    return (
        <div className="bg-gradient-to-r from-green-100 to-sky-300 h-screen">
            <div className="flex flex-col justify-center">
            <h2 className="text-xl flex justify-center mt-4 font-bold">Sign Into Your Account</h2>
            <form onSubmit={handleOnSubmit} className='flex flex-col bg-stone-100 p-6 border-2 m-6 rounded-xl shadow-md'>
                <label className='pb-1' htmlFor="email">Email Address</label>
                <input className='mb-1 py-1 pl-2 italic rounded-xl' type="email" id='email' value={email} onChange={handleChangeEmail} placeholder="Email"/>
                <label className='pb-1' htmlFor="password">Password</label>
                <input className='mb-6 py-1 pl-2 italic rounded-xl' type="password" value={password} onChange={handleChangePassword} id="password" placeholder="Password"/>
                <Btn btnText='Login'/>
                <div className="flex justify-between mt-4">
                    <Link to='/signup' className="font-bold">Sign Up!</Link>
                    <Link to='/login/forgot' className="font-bold">Forgot Login?</Link>
                </div>
            </form>
            </div>
        </div>
        )
    }