import React from 'react'
import { Link } from 'react-router-dom'
import FeedIcon from '../assets/Icons/feed.svg'
import ProfileIcon from '../assets/Icons/profile.svg'
import GroupIcon from '../assets/Icons/groups.svg'
import PostIcon from '../assets/Icons/post.svg'
import Logout from '../assets/Icons/power.png'

export default function UserHeader() {
  return (
    <div className='flex justify-between p-2 text-2xl font-bold bg-sky-500 sticky w-full md:p-3 lg:p-4 '>
      <div className='ml-6'>
        <Link to='/feed'>Fit Journal 💪</Link>
      </div>
      <nav className='hidden sm:block sm:flex'>
        <Link to='/feed'><img className='w-9 h-10' src={FeedIcon} alt="feed" /></Link>
        <Link to='/groups'><img className='mx-8 w-9 h-10' src={GroupIcon} alt="groups" /></Link>
        <Link to='/post'><img className='w-9 h-10' src={PostIcon} alt="profile" /></Link>  
        <Link to='/profile'><img className='w-9 mx-8 h-10' src={ProfileIcon} alt="profile" /></Link>
        <Link to='/'><img className='w-9 h-10 mr-4' src={Logout} alt="" /></Link>  
      </nav>
    </div>
  )
}