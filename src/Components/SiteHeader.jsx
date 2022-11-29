import { Link } from "react-router-dom"
import Nav from "./MobileNav"

export default function Header () {
    return (
        <header className="sticky flex justify-center w-full p-2 text-2xl font-bold bg-sky-600 md:p-3 lg:p-4">
            <h1><Link to='/'>Fit Journal 💪</Link></h1>
            
        </header>
    )
}