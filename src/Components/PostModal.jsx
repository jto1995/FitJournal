import React from 'react'

export default function PostModal() {
  return (
    <div className='absolute top-0 left-0 flex justify-center bg-black w-screen h-screen z-10 bg-opacity-50'>
        <div className='bg-slate-200 h-2/3 w-2/3 flex justify-center object-center m-auto rounded-xl'>
            <div className='flex flex-col items-center'>
            <h1 className='text-3xl my-5'>New Post</h1>
            <form>
                <label htmlFor="">hello</label>
                <input type="text" placeholder='hello'/>
            </form>
            </div>
        </div>
    </div>
  )
}

