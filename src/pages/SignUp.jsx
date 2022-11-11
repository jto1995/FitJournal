import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Components/Btn/Btn";
import '../styles/SignUp.scss'
export default function SignUp(){

    const [email, setEmail] = useState("");
    const [name, setName] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
      const handleChangeName = (event) => {
        setName(event.target.value);
      }
      const handleChangePassword = (event) => {
        setPassword(event.target.value);
      };
      const handleChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
      };

      const isPasswordValid = () => {
        if (password) {
            return true;
          }
          return false;
        };

    const isConfirmPasswordValid = () => {
        if (confirmPassword && password === confirmPassword) {
            return true;
        }
          return false;
        };

        const passwordWarning = () => {
            if(!isConfirmPasswordValid()) {
              return <div>Passwords dont' match</div>;
            } else {
              return '';
            }
          }

          const isFormValid = () => {
            if(!email) {
              return false;
            }
            if(!name) {
                return false;
            }
            if (!isPasswordValid()) {
              return false;
            }
            if (!isConfirmPasswordValid()) {
              return false;
            }
            return true;
          };

          const handleSubmit = (event) => {
            event.preventDefault();
        
            if (isFormValid()) {

              alert("Signed up successfully");
              navigate('/feed')
            } else {
              alert("Failed to sign up, you have errors in your form");
            }
          };

    return (
        <div className="sign">
            <form onSubmit={handleSubmit} value={email} onChange={handleChangeEmail} className="signup">
                <label> Email:</label>
                <input type="email" />

                <label>Name: </label>
                <input type="text" value={name} onChange={handleChangeName}></input>

                <label>Password:</label>
                <input type="password" value={password} onChange={handleChangePassword}/>

                <label>Confirm Password: </label>
                <input type="password" className="signup__confirm" value={confirmPassword} onChange={handleChangeConfirmPassword}/>

                {passwordWarning()}
                <Btn btnText="Submit"/>
            </form>
            <div>
            <Link to="/login">Back</Link>
            </div>
        </div>
    )
}