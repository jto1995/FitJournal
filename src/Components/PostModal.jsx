import React from 'react'

export default function PostModal(post) {
  return (
    <div className='absolute top-0 left-0 flex justify-center bg-black w-screen h-screen z-10 bg-opacity-50'>
        <div className='bg-slate-200 h-3/4 w-2/3 flex justify-center object-center m-auto rounded-xl'>
            <div className='flex justify-end w-100'>
                <p onClick={post.click}>X</p>
            </div>
            <div className='flex flex-col items-center w-screen'>
            <h1 className='text-3xl my-5'>New Post</h1>
            <form>
                <div className='flex flex-col'>
                <label htmlFor="">hello</label>
                <textarea type="text" placeholder='hello' resize='none' className='w-4/5 h-1/3'/>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

