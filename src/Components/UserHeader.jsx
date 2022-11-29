import React from "react";
import { Link } from "react-router-dom";
import FeedIcon from "../assets/Icons/feed.svg";
import ProfileIcon from "../assets/Icons/profile.svg";
import GroupIcon from "../assets/Icons/groups.svg";
import PostIcon from "../assets/Icons/post.svg";
import Logout from "../assets/Icons/power.png";

export default function UserHeader() {
  return (
    <div className="sticky flex justify-center w-full p-2 text-2xl font-bold bg-sky-700 md:p-3 lg:p-4 sm:justify-between">
      <div className="ml-6">
        <Link to="/feed">Fit Journal 💪</Link>
      </div>
      <nav className="hidden sm:block sm:flex">
        <Link to="/feed">
          <img className="h-10 w-9" src={FeedIcon} alt="feed" />
        </Link>
        <Link to="/groups">
          <img className="h-10 mx-8 w-9" src={GroupIcon} alt="groups" />
        </Link>
        <Link to="/post">
          <img className="h-10 w-9" src={PostIcon} alt="profile" />
        </Link>
        <Link to="/profile">
          <img className="h-10 mx-8 w-9" src={ProfileIcon} alt="profile" />
        </Link>
        <Link to="/">
          <img className="h-10 mr-4 w-9" src={Logout} alt="" />
        </Link>
      </nav>
    </div>
  );
}
