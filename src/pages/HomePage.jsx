import Nav from "../Components/Navigation/Nav";
import FeedCard from "../Components/FeedCard/FeedCard.jsx"
import '../styles/HomePage.scss'
export default function HomePage () {
    return(
        <section>
            <div className="home-page">
            <p>Welcome Back (User)</p>
            <FeedCard name='Jason' time='Jan 01 2011' post='Hello world this is a test! Hopefully this works'/>
            </div>
            <Nav/>
        </section>
    )
}