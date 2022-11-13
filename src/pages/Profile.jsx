import Nav from "../Components/MobileNav";
import ProfilePic from '../assets/images/pic.jpg'
import { Link } from "react-router-dom";

export default function Profile (userInfo) {
    return (
    <section className='bg-gradient-to-r from-green-100 to-sky-300 h-screen'>
    <div className="flex flex-col justify-center pt-4 mb-6 ">
        <img className='rounded-full h-20 w-20' src={ProfilePic} alt=""/>
        <p>{userInfo.name}Mohan Muruge</p>
    </div> 
    <nav>
        <ul className="flex justify-between my-5 bg-sky-800 lg:justify-evenly">
            {/* to filter what you're looking for */}
            <li className="bg-sky-400 p-3"><Link>Nutrition</Link></li>
            <li className="bg-sky-400 p-3"><Link>Workout</Link></li>
            <li className="bg-sky-400 p-3"><Link>Friends List</Link></li>
            {/* include some icons with these buttons */}
        </ul>
    </nav>
    <div>
        <p>Date</p>
        <p>Your previous posts!! Need to grab information from server/api to be worked on later!!! Will make a card component for these cards so am able to map all info into those cards and make this page of code shorter</p>
    </div>
        <Nav/>


    </section>)
}