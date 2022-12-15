import { useState } from "react";
import Workout from '../assets/images/Workout.jpeg'
import { Link } from "react-router-dom";

export default function PostPage() {
  const [showHide, setShowHide] = useState("");

  const handleShowHide = (e) => {
    const getOption = e.target.value;
    setShowHide(getOption);
  };

  return (
    <div>
      <div className="min-h-screen p-2 bg-gradient-to-r from-green-100 to-sky-300 pt-4 ">
        <p className="font-bold italic text-xl">What are you logging?</p>
        <Link to='workout'>
          <div className="p-16 my-4 w-full bg-slate-100 image-1 text-3xl font-bold">Exercise</div>
        </Link>
        <Link to='food'>
          <div className="p-16 my-4 w-full bg-slate-100 image-2 text-3xl font-bold text-blue-500 flex justify-end">Food</div>
        </Link>
        <Link to='weight'>
          <div className="p-16 my-4 w-full bg-slate-100 image-3 text-white text-3xl font-bold">Weight</div>
        </Link>
      </div>
    </div>
  );
}
