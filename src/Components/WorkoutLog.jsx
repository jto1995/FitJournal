import { useState } from "react";
import Btn from "./Btn";
import Legs from "./Legs";
import TemplateCard from "./TemplateCard";

export default function WorkoutLog() {
  const [openLegs, setOpenLegs] = useState(false);
  const [openChest, setOpenChest] = useState(false);
  const [openBack, setOpenBack] = useState(false);

  // handle open
  const handleLegsOpen = () => {
    setOpenLegs(true);
  };
  const handleLegsClose = () => {
    setOpenLegs(false);
  };
  const handleChestOpen = () => {
    setOpenChest(true);
  };
  const handleChestClose = () => {
    setOpenChest(false);
  };
  const handleBackOpen = () => {
    setOpenBack(true);
  };
  const handleBackClose = () => {
    setOpenBack(false);
  };

  



  return (
    <div className="min-h-screen p-4 rounded-xl">
      <h1 className="font-bold text-2xl mb-6">Start Workout</h1>
      <div className="mb-2">
        <h3 className="italic font-bold text-xl">Quick Start</h3>
      </div>
      <div className="mb-6">
        <Btn btnText="Start New Workout" class="w-100" />
      </div>
      <div>
        <div className="flex justify-between border-b-2 pb-4">
          <h3 className="mt-3 font-bold text-lg">Templates</h3>
          <Btn btnText="+ Template" />
        </div>
        <div className="flex justify-center border-2 w-1/2 h-1/2 mb-8 mt-4 rounded-xl bg-stone-50">
          <p className="p-10"> + Tap to add New Template</p>
        </div>
      </div>
      <div>
        <div className="mb-4 border-t-2 pt-4">
          <h3 className="font-bold text-2xl">Example Templates</h3>
        </div>
        <div className="flex flex-col">
          <TemplateCard click={handleLegsOpen}/>
          <div
            onClick={handleChestOpen}
            className="min-w-1/2 border-2 p-4 my-8 rounded-xl bg-stone-50"
          >
            <div className="flex justify-center mb-2 border-b-2 pb-2">
              <h3 className="font-bold text-xl">Chest & Triceps</h3>
            </div>
            <p>Bench Press</p>
            <p>Incline Bench</p>
            <p>Military Press</p>
            <p>Lateral Raise</p>
            <p>Skull Crushers</p>
          </div>
          <div
            onClick={handleBackOpen}
            className="min-w-1/2 border-2 p-4 mb-20 rounded-xl bg-stone-50"
          >
            <div className="flex justify-center mb-2 border-b-2 pb-2">
              <h3 className="font-bold text-xl">Back & Biceps</h3>
            </div>
            <p>Deadlifts</p>
            <p>Seated Rows</p>
            <p>Lat Pulldowns</p>
            <p>Bicep Curls</p>
          </div>
        </div>
      </div>
{openLegs && (<Legs close={handleLegsClose}/>)}
{openBack && (<></>)}
{openChest && (<></>)}
    </div>
  );
}
