import React from 'react'
import './FeedCard.scss'
export default function FeedCard(props) {
  return ( 
<section className='feed'>
    <div className='feed__top'>
        <p>{props.name}</p>
        <p>{props.time}</p>
    </div>
    <div className='feed__main'>
        <p>{props.post}</p>
    </div>


</section>
  )
}

