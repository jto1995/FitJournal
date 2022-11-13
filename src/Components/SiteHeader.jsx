import { Link } from "react-router-dom"
import Nav from "./MobileNav"
export default function Header () {
    return (
        <header className="flex justify-center p-2 text-2xl font-bold bg-sky-500 sticky w-full md:p-3 lg:p-4">
            <h1><Link to='/'>Fit Journal 💪</Link></h1>
            
        </header>
    )
}