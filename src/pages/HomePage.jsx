import Nav from "../Components/Navigation/Nav";
import FeedCard from "../Components/FeedCard/FeedCard.jsx"
export default function HomePage () {
    return(
        <section>
            <div className='bg-sky-50 p-4 h-screen'>
            <p>Welcome Back (User)</p>
            <FeedCard name='Jason' time='Jan 01 2011' post='Hello world this is a test! Hopefully this works'/>
            </div>
            <Nav/>
        </section>
    )
}