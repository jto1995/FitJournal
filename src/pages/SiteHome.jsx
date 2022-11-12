import { Link } from "react-router-dom";
import Btn from "../Components/Btn/Btn";
export default function SiteHome (){
    return (
        <div className='bg-sky-50 px-4 h-screen'>        
            <div className="flex justify-between pt-4 pb-2">
                <Link to="/signup"><Btn btnText='Sign Up'/></Link>
                <Link to='/login'><Btn btnText='Login'/></Link>
            </div>
            <div className="py-4">
            <h2 className="font-bold pb-2">Welcome to Fit Journal!</h2>
            <p className="italic">We're a social media journal that allows you to record and share your fitness journey</p>
            </div>
            <div className="pt-2 pb-6">
                <h3 className="font-bold pb-2">Who we are!</h3>
                <p className="italic">I'm an aspiring web dev creating a site for my capstone looking to help people keep track of their fitness journey, keeping them accountable and just being able to share your progress with your friends!</p>
            </div>
            <div>
                throw some pictures of user charts and some demos of how the site works down here!!!
            </div>
        </div>
    )
}