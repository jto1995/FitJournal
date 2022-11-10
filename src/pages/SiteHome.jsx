import { Link } from "react-router-dom";
import '../styles/SiteHome.scss'
import Btn from "../Components/Btn/Btn";
export default function SiteHome (){
    return (
        <div className='site-home'>        
            <div className='site-home-mini-nav'>
                <Link to="/signup"><Btn btnText='Sign Up'/></Link>
                <Link to='/login'><Btn btnText='Login'/></Link>
            </div>
            <div className="page-header">
            <h2>Welcome to Fit Journal!</h2>
            <p>We're a social media journal that allows you to record and share your fitness journey</p>
            </div>
            <div className="about-us">
                <h3>Who we are!</h3>
                <p>I'm an aspiring web dev creating a site for my capstone looking to help people keep track of their fitness journey, keeping them accountable and just being able to share your progress with your friends!</p>
            </div>
            <div>
                throw some pictures of user charts and some demos of how the site works down here!!!
            </div>
        </div>
    )
}