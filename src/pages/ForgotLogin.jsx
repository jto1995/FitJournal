import { Link } from "react-router-dom";
import Btn from "../Components/Btn/Btn";

export default function ForgotLogin (){
    return (
        <div className="p-4 bg-sky-50 h-screen">
            <Link to='/login' className="mb-4 font-bold">Back</Link>
            <form className="flex flex-col my-4">
                <label className="my-1" htmlFor="">Email: </label>
                <input className="px-2 py-1 mb-6" type="email" placeholder="Email"/>
                <Btn btnText="Submit"/>  
            </form>
        </div>
    )
}