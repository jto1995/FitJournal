import { Link } from "react-router-dom";
import FeedIcon from "../assets/Icons/feed.svg";
import ProfileIcon from "../assets/Icons/profile.svg";
import PostIcon from "../assets/Icons/post.svg";
import GroupIcon from "../assets/Icons/groups.svg";
import Logout from "../assets/Icons/power.png";
export default function Nav({ user, logout }) {
  
  return (
    <nav>
      <ul className="flex justify-between bg-sky-500 fixed bottom-0 w-full px-4 py-2">
        <li>
          <Link to="/">
            <img className="w-10" src={FeedIcon} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/groups">
            <img className="w-10" src={GroupIcon} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/post">
            <img className="w-10" src={PostIcon} alt="" />
          </Link>
        </li>
        <li>
          {user?.map((info, index) => {
            return(
          <Link to={`/profile/${info.id}`} key={index}>
            <img className="w-10" src={ProfileIcon} alt="" />
          </Link>
            )
          })}
        </li>
        <li>
          <button onClick={logout}>
            <img className="w-9 h-10" src={Logout} alt="" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
