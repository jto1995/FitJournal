import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Components/Btn";
import Google from "../assets/Icons/google.png"
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
        <div className="bg-gradient-to-r from-green-100 to-sky-300 h-screen p-4">
            <p className="flex justify-center font-bold text-3xl lg:mt-4 mb-8">Sign Up</p>
            <div className="flex justify-center">
            <form onSubmit={handleSubmit} value={email} onChange={handleChangeEmail} className='flex flex-col bg-stone-100 p-8 border-2 m-6 rounded-xl shadow-md w-80'>
                <label className="pb-1 font-bold italic"> Email Address:</label>
                <input className="mb-2 py-1 pl-2 italic rounded-xl" type="email" placeholder="Email" />

                <label className="pb-1 font-bold italic">Full Name: </label>
                <input className="mb-2 py-1 pl-2 italic rounded-xl" type="text" value={name} onChange={handleChangeName} placeholder='Name'></input>

                <label className="pb-1 font-bold italic">Password:</label>
                <input className="mb-2 py-1 pl-2 italic rounded-xl" type="password" value={password} onChange={handleChangePassword} placeholder='Password'/>

                <label className="pb-1 font-bold italic">Confirm Password: </label>
                <input className="mb-2 py-1 pl-2 italic rounded-xl" type="password" value={confirmPassword} onChange={handleChangeConfirmPassword} placeholder='Confirm Password'/>

                <div className="mt-2 mb-4">
                {password === confirmPassword ? <p></p> : <p>Password don't match</p>}
                </div>
                <Btn btnText="Submit"/>
                <p className="flex justify-center mt-6">----------or-----------</p>

                <div className="flex justify-center mt-6 border-2 p-4 rounded-xl justify-between shadow-md bg-slate-100">
                    <img className="w-6" src={Google} alt="" />
                    <p>Sign up with Google</p>
                </div>

                <div className="flex justify-center mt-6 border-2 p-4 rounded-xl justify-between shadow-md bg-slate-100">
                    <img className="w-6" src={Google} alt="" />
                    <p>Sign up with Facebook</p>
                </div>
            </form>
            </div>
            <div className="mt-4">
            <Link className='font-bold flex justify-center'to="/login">Back</Link>
            </div>
        </div>
    )
}