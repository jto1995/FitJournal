import { Link } from "react-router-dom"
import './Header.scss'
export default function Header () {
    return (
        <header >
            <h1><Link to='/'>Fit Journal 💪</Link></h1>
        </header>
    )
}