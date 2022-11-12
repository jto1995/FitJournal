import { Link } from "react-router-dom"
export default function Header () {
    return (
        <header>
            <h1 className="flex justify-center h-10 p-1 text-2xl font-bold bg-sky-500 sticky w-full"><Link to='/'>Fit Journal 💪</Link></h1>
        </header>
    )
}