import GroupCard from "../Components/GroupCard/GroupCard";
import Nav from "../Components/Navigation/Nav";

export default function Groups () {
    return (
    <section>
        <div className="flex justify-center mt-2 text-xl font-bold">
        <h2>Groups Page</h2>
        </div>
        <GroupCard/>
        <Nav/>
    </section>
    )
}