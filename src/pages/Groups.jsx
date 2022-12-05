import GroupCard from "../Components/GroupCard";

export default function Groups () {

    return (
    <section>
        <div className="bg-gradient-to-r from-green-100 to-sky-300 pt-3 h-screen">
            <div className="flex justify-center text-xl font-bold">
            <h2>Groups Page</h2>
            </div>
        <GroupCard/>
        </div>
    </section>
    )
}