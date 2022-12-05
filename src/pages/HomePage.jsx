import FeedCard from "../Components/FeedCard.jsx"
export default function HomePage (user) {
    return(
        <div>
            <section>
                <div className='bg-gradient-to-r from-green-100 to-sky-300 p-4 h-screen'>
                <p>Welcome Back {user.name}</p>
                <FeedCard name='Jason' time='Jan 01 2011' post='Hello world this is a test! Hopefully this works'/>
                </div>
            </section>
        </div>
    )
}