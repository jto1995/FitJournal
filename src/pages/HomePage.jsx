import Nav from "../Components/MobileNav";
import FeedCard from "../Components/FeedCard.jsx"
export default function HomePage () {
    return(
        <section>
            <div className='bg-gradient-to-r from-green-100 to-sky-300 p-4 h-screen'>
            <p>Welcome Back (User)</p>
            <FeedCard name='Jason' time='Jan 01 2011' post='Hello world this is a test! Hopefully this works'/>
            </div>
            <Nav/>
        </section>
    )
}