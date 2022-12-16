import axios from "axios";
import React from "react";
import Btn from "./Btn";

export default function PostModal(post) {
  return (
    <div className="absolute top-0 left-0 flex justify-center bg-black w-screen h-screen z-10 bg-opacity-50">
      <div className="bg-slate-200 h-1/2 w-3/4 flex justify-center object-center m-auto rounded-xl">
        <div className="flex flex-col w-screen">
          <div className="flex justify-between px-10">
            <h1 className="text-3xl my-5 font-bold">New Post</h1>
            <p className="pt-6 text-2xl font-bold" onClick={post.click}>X</p>
          </div>
          <form onSubmit={post.handleSubmit}>
            <div className="flex flex-col min-w-min h-100 px-8">
              <textarea
                type="text"
                placeholder="New Post..."
                name="post"
                className="min-w-100 px-20 pl-3 pt-2 pb-20 rounded-2xl"
              />
            </div>
            <div className="flex justify-end mt-6 px-10">
              <Btn btnText="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
