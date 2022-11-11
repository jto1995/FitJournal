import Nav from "../Components/Navigation/Nav";
import '../styles/profile.scss';
import ProfilePic from '../assets/images/pic.jpg'
import { Link } from "react-router-dom";

export default function Profile (userInfo) {
    return (<section>
    <div className="profile">
        <div>
        <img className="profile__pic"src={ProfilePic} alt=""/>
        </div>
        <div>
        <p>{userInfo.name}Mohan Muruge</p>
        </div>
    </div> 
    <nav>
        <ul className="profile-nav">
            {/* to filter what you're looking for */}
            <li className="profile-nav__items"><Link>Nutrition</Link></li>
            <li className="profile-nav__items"><Link>Workout</Link></li>
            <li className="profile-nav__items"><Link>Post</Link></li>
            {/* include some icons with these buttons */}
        </ul>
    </nav>
    <div className="past-posts">
        <p>Date</p>
        <p>Your previous posts!! Need to grab information from server/api to be worked on later!!! Will make a card component for these cards so am able to map all info into those cards and make this page of code shorter</p>
    </div>
        <Nav/>


    </section>)
}