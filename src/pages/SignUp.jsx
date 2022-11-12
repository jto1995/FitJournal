import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Components/Btn/Btn";
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
        <div className="bg-sky-50 h-screen p-4">
            <form onSubmit={handleSubmit} value={email} onChange={handleChangeEmail} className="flex flex-col">
                <label className="pb-1"> Email:</label>
                <input className="mb-2 h-7 pl-2" type="email" placeholder="Email" />

                <label className="pb-1">Name: </label>
                <input className="mb-2 h-7 pl-2" type="text" value={name} onChange={handleChangeName} placeholder='Name'></input>

                <label className="pb-1">Password:</label>
                <input className="mb-2 h-7 pl-2" type="password" value={password} onChange={handleChangePassword} placeholder='Password'/>

                <label className="pb-1">Confirm Password: </label>
                <input className="mb-2 h-7 pl-2" type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder='Confirm Password'/>
                
                <div className="mt-2 mb-4">
                {passwordWarning()}
                </div>
                <Btn btnText="Submit"/>
            </form>
            <div className="mt-4">
            <Link className='font-bold'to="/login">Back</Link>
            </div>
        </div>
    )
}