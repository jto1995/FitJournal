import React from "react";

export default function TemplateCard({filteredWorkout, click, title} ) {
  return (
    <div
      onClick={click}
      className="min-w-full border-2 p-4 rounded-xl bg-stone-50 my-4 shadow-2xl"
    >
      <div className="flex justify-center mb-2 border-b-2 pb-2">
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
      {filteredWorkout?.map((data, i) => {
        return <p key={i}>{data.name}</p>
      })}
    </div>
  );
}

