import Btn from "../Components/Btn/Btn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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
        <div className="bg-sky-50 h-screen">
            <form onSubmit={handleOnSubmit} className='flex flex-col p-4'>
            <Link className="pb-2 w-20 font-bold" to='/'>Back</Link>
                <label className='pb-1' htmlFor="email">Email</label>
                <input className='mb-1 px-1' type="email" id='email' value={email} onChange={handleChangeEmail} placeholder="Email"/>
                <label className='pb-1' htmlFor="password">Password</label>
                <input className='mb-6 px-1' type="password" value={password} onChange={handleChangePassword} id="password" placeholder="Password"/>
                <Btn btnText='Submit'/>
                <div className="flex justify-between mt-4">
                    <Link to='/signup' className="font-bold">Sign Up!</Link>
                    <Link to='/login/forgot' className="font-bold">Forgot Login?</Link>
                </div>
            </form>
        </div>
        )
    }