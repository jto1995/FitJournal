import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../Components/Btn";
import Google from "../assets/Icons/google.png"
import Facebook from "../assets/Icons/facebook.png"

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
      <div>
        <div className="bg-gradient-to-r from-green-100 to-sky-300 ">
            <p className="flex justify-center pt-4 text-3xl font-bold lg:mb-2">Sign Up</p>
            <div className="flex justify-center">
            <form onSubmit={handleSubmit} value={email} onChange={handleChangeEmail} className='flex flex-col p-8 m-6 border-2 shadow-md bg-stone-100 rounded-xl w-80'>
                <label className="pb-1 italic font-bold"> Email Address:</label>
                <input className="py-1 pl-2 mb-2 italic rounded-xl" type="email" placeholder="Email" />

                <label className="pb-1 italic font-bold">Full Name: </label>
                <input className="py-1 pl-2 mb-2 italic rounded-xl" type="text" value={name} onChange={handleChangeName} placeholder='Name'></input>

                <label className="pb-1 italic font-bold">Password:</label>
                <input className="py-1 pl-2 mb-2 italic rounded-xl" type="password" value={password} minLength="8" onChange={handleChangePassword} placeholder='Password'/>

                <label className="pb-1 italic font-bold">Confirm Password: </label>
                <input className="py-1 pl-2 mb-2 italic rounded-xl" type="password" value={confirmPassword} minLength="8" onChange={handleChangeConfirmPassword} placeholder='Confirm Password'/>

                <div className="mt-2 mb-4">
                {password === confirmPassword ?<p></p> : <p>Password don't match</p>}
                </div>
                <Btn btnText="Submit"/>
                <p className="flex justify-center mt-3">----------or-----------</p>

                <div className="flex justify-center justify-between p-4 mt-4 border-2 shadow-md rounded-xl bg-slate-100">
                    <img className="w-6" src={Google} alt="" />
                    <p>Sign up with Google</p>
                </div>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>

                <div className="flex justify-center justify-between p-4 mt-4 border-2 shadow-md rounded-xl bg-slate-100">
                    <img className="w-6" src={Facebook} alt="" />
                    <p>Sign up with Facebook</p>
                </div>
            </form>
            </div>
            <div className="my-4">
            <Link className='flex justify-center font-bold'to="/login">Back</Link>
            </div>
        </div>
      </div>
    )
}