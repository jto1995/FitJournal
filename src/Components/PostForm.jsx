import WorkImg from '../assets/Icons/Workout.png'
export default function PostForm(post) {
  

  return (
    <section className="flex justify-center">
      <p className="mb-2 mr-6 font-bold">What are you logging?</p>
      <select
        onChange={post.change}
        className="py-1 pl-2 mb-6 italic rounded-xl"
        name="selectList"
        id="selectList"
      >
        <option>
          Options
        </option>
        <option value="exercise">Exercise Log</option>
        <option value="food">Food Log</option>
        <option value="weight">Weight Log</option>
      </select>
      {/* <div className='h-1/3'>
        <img className='h-1/3 ' src={WorkImg} alt="" />
      </div> */}
    </section>
  );
}
