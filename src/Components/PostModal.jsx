import axios from 'axios';
import React from 'react'
import Btn from './Btn'

export default function PostModal(post) {

  return (
    <div className='absolute top-0 left-0 flex justify-center bg-black w-screen h-screen z-10 bg-opacity-50'>
        <div className='bg-slate-200 h-1/2 w-3/4 flex justify-center object-center m-auto rounded-xl'>
            <div className='flex justify-end w-100'>
                <p onClick={post.click}>X</p>
            </div>
            <div className='flex flex-col items-center w-screen'>
            <h1 className='text-3xl my-5'>New Post</h1>
            <form onSubmit={post.handleSubmit}>
                <div className='flex flex-col min-w-min h-100'>
                <textarea type="text" placeholder='New Post...' name='post' className='min-w-100 pr-20 pl-3 pt-2 pb-20 rounded-2xl'/>
                </div>
                <div className='flex justify-end mt-6'>
                <Btn btnText="Submit"/>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

