import Btn from "../Components/Btn/Btn";
import '../styles/LoginForm.scss'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login () {

    const [username, setUsername] = useState()
    
    
    return (
    <div>
        <form className='login-form'>
        <Link to='/'>Back</Link>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' placeholder="Email"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password"/>
            <Link to='/feed'><Btn btnText='Submit'/></Link>
            <div className="login-form__links">
                <Link to='/signup'>Sign Up!</Link>
                <Link to='/login/forgot'>Forgot Login?</Link>
            </div>
        </form>
    </div>
    )
}