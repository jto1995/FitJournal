import ProfilePic from "../assets/images/pic.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {

  const [userInfo, setUserInfo] = useState();
  
  const params = useParams();
  const api = 'http://localhost:8080'

  const getData = () => {
    axios
      .get(`${api}/user/${params.id}`)
      .then((response) => {
      setUserInfo(response.data)
      })
    };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <section className="bg-gradient-to-r from-green-100 to-sky-300 h-screen">
        {userInfo?.map((user, i)=> {
          return(
        <div key={i} className="flex flex-col justify-center items-center pt-4 mb-6 ml-50">
          <img className="rounded-full h-20 w-20" src={ProfilePic} alt="" />
          <p>{user.name}</p>
        </div>
        )})}
        <nav>
          <ul className="flex justify-between my-5 bg-sky-800 lg:justify-evenly">
            <li className="bg-sky-400 p-3">
              <Link to='/coming-soon'>Nutrition History</Link>
            </li>
            <li className="bg-sky-400 p-3">
              <Link to='/coming-soon'>Workout History</Link>
            </li>
            <li className="bg-sky-400 p-3">
              <Link to='/coming-soon'>Friends List</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col p-6 bg-slate-100 m-6 rounded-xl">
          <div className="flex justify-between mx-4 mb-2">
            <p>Date</p>
            <button>🗑️</button>
          </div>
          <p>
            Your previous posts!! Need to grab information from server/api to be
            worked on later!!! Will make a card component for these cards so am
            able to map all info into those cards and make this page of code
            shorter
          </p>
        </div>
      </section>
    </div>
  );
}
