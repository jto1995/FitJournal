import { Link } from "react-router-dom";

export default function PostPage() {

  return (
    <div>
      <div className="min-h-screen p-2 bg-gradient-to-r from-green-100 to-sky-300 pt-4 ">
        <p className="font-bold italic text-xl text-center mb-2">What are you logging?</p>
        <Link to='workout'>
          <div className="bg-[url('/src/assets/images/Workout.jpg')] bg-cover bg-center bg-no-repeat text-white p-16 my-4 w-full bg-slate-100 text-3xl font-bold">Exercise</div>
        </Link>
        <Link to='food'>
          <div className="bg-[url('/src/assets/images/Food.jpg')] bg-cover bg-center bg-no-repeat p-16 my-4 w-full bg-slate-100 text-3xl font-bold text-white flex justify-end">Food</div>
        </Link>
        <Link to='weight'>
          <div className="bg-[url('/src/assets/images/Scale.jpg')] bg-cover bg-center p-16 my-4 w-full bg-slate-100  text-white text-3xl font-bold">Weight</div>
        </Link>
      </div>
    </div>
  );
}
