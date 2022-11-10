import { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../Components/Btn/Btn";
import '../styles/SignUp.scss'
export default function SignUp(){

// function FormWithState() {
//     const [username, setUsername] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
// }
    return (
        <div className="sign">
            <form className="signup">
                <label> Email:</label>
                <input type="email" />
                <label>
                    Password:   
                </label>
                <input type="password" />
                <label>
                    Confirm Password: 
                </label>
                <input type="password" className="signup__confirm" />
                <Link to="/feed"><Btn btnText="Submit"/></Link>
            </form>
            <div>
            <Link to="/login">Back</Link>
            </div>
        </div>
    )
}