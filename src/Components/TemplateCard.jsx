import React from "react";

function TemplateCard(handleOpen) {
  return (
    <div
      onClick={handleOpen.click}
      className="min-w-full border-2 p-4 rounded-xl bg-stone-50"
    >
      <div className="flex justify-center mb-2 border-b-2 pb-2">
        <h3 className="font-bold text-xl">Legs</h3>
      </div>
      <p>Squats</p>
      <p>Leg Extentions</p>
      <p>Flat Leg Raises</p>
      <p>Standing Calf Raise</p>
    </div>
  );
}

export default TemplateCard;
