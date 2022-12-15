import React from "react";
export default function FeedCard(props) {
  return (
    <section className="flex flex-col px-2 bg-stone-50 rounded-xl my-4 shadow-2xl">
      <div className="flex justify-between p-4">
        <p className="font-bold">{props.name}</p>
        <p>{props.time}</p>
      </div>
      <div className="px-4">
        <p>{props.post}</p>
      </div>
      <div className=" p-4 flex justify-between ">
        <p>{props.likes}❤️</p>
        <p>🗑️</p>
      </div>
    </section>
  );
}
