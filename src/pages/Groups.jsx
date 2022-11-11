import GroupCard from "../Components/GroupCard/GroupCard";
import Nav from "../Components/Navigation/Nav";
import '../styles/GroupsPage.scss';

export default function Groups () {
    return (
    <section>
        <div className="group-header">
        <h2>Groups Page</h2>
        </div>
        <GroupCard/>
        <Nav/>
    </section>
    )
}