import { Link } from "react-router-dom";
import Btn from "../Components/Btn";

export default function ForgotLogin (){
    return (
        <div className="p-4 bg-gradient-to-r from-green-100 to-sky-300 h-screen">
            <Link to='/login' className="mb-4 font-bold">Back</Link>
            <form className="flex flex-col bg-stone-100 p-6 border-2 m-6 rounded-xl shadow-md">
                <label className="my-1" htmlFor="">Email Address: </label>
                <input className="px-2 py-1 mb-6" type="email" placeholder="Email Address"/>
                <Btn btnText="Submit"/>  
            </form>
        </div>
    )
}