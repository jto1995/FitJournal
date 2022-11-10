import FeedCard from "../Components/FeedCard/FeedCard";
import Nav from "../Components/Navigation/Nav";

export default function HomePage () {
    return(
        <section>
            <p>this is where you can see your feed of friends</p>
            <FeedCard name="Jason" time="January" post="hello world"/>
            <Nav/>
        </section>
    )
}