import { Link } from 'react-router-dom';
import './nav.scss';
import FeedIcon from '../../assets/Icons/feed.svg'
import ProfileIcon from '../../assets/Icons/profile.svg'
import PostIcon from '../../assets/Icons/post.svg'
import GroupIcon from '../../assets/Icons/groups.svg'
import SettingIcon from '../../assets/Icons/settings.svg'
export default function Nav () {
    return (
        <nav>
            <ul className="mobile-nav">
                <li><Link to='/'><img className='icon' src={FeedIcon} alt="" /></Link></li>
                <li><Link to='/groups'><img className='icon' src={GroupIcon} alt="" /></Link></li>
                <li><Link to='/post'><img className='icon' src={PostIcon} alt="" /></Link></li>
                <li><Link to='/profile'><img className='icon' src={ProfileIcon} alt="" /></Link></li>
                <li><Link to='/settings'><img className='icon' src={SettingIcon} alt="" /></Link></li>
            </ul>
        </nav>
    )
}