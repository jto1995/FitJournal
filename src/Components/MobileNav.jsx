import { Link } from 'react-router-dom';
import FeedIcon from '../assets/Icons/feed.svg'
import ProfileIcon from '../assets/Icons/profile.svg'
import PostIcon from '../assets/Icons/post.svg'
import GroupIcon from '../assets/Icons/groups.svg'
export default function Nav () {
    return (
        <nav>
            <ul className="flex justify-between bg-sky-500 fixed bottom-0 w-full">
                <li><Link to='/feed'><img className='w-10' src={FeedIcon} alt="" /></Link></li>
                <li><Link to='/groups'><img className='w-10' src={GroupIcon} alt="" /></Link></li>
                <li><Link to='/post'><img className='w-10' src={PostIcon} alt="" /></Link></li>
                <li><Link to='/profile'><img className='w-10' src={ProfileIcon} alt="" /></Link></li>
            </ul>
        </nav>
    )
}