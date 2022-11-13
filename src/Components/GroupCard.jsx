import Btn from "./Btn";
export default function GroupCard (){
    return (
        <div className="group-card">
            <h1>Vancouver Climbers</h1>
            <div>
                <p>Hey we're a group in Vancouver that is dedicated to all things climbing! You can find anything from tips, selling memberships to local gym or carpool to the awesome climbing routes we have in Vancouver!</p>
            </div>
            <Btn btnText='Join'/>
        </div>
    )
}