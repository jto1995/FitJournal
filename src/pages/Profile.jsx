import ProfilePic from "../assets/images/pic.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Btn from "../Components/Btn";

export default function Profile() {
  const [userInfo, setUserInfo] = useState();
  const [userPosts, setUserPosts] = useState();

  const params = useParams();
  const api = "http://localhost:8080";

  const getData = () => {
    axios.get(`${api}/user/${params.id}`).then((response) => {
      setUserInfo(response.data);
    });
  };

  const getPost = () => {
    axios.get(`${api}/posts/${params.id}`).then((response) => {
      setUserPosts(response.data);
    });
  };

  useEffect(() => {
    getData();
    getPost();
  }, []);

  function formatDate(value) {
    const length = 10;
    const shortString = value.substring(0, length);
    return shortString;
  }
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    axios.delete(`${api}/posts/${e.target.value}`)
    .then(()=> {
      getPost();
    })
  };
  return (
    <div>
      <section className="bg-gradient-to-r from-green-100 to-sky-300 h-screen">
        {userInfo?.map((user, i) => {
          return (
            <div
              key={i}
              className="flex flex-col justify-center items-center pt-4 mb-6 ml-50"
            >
              <img className="rounded-full h-20 w-20" src={ProfilePic} alt="" />
              <p>{user.name}</p>
            </div>
          );
        })}
        <nav>
          <ul className="flex justify-between my-5 bg-sky-800 lg:justify-evenly">
            <li className="bg-sky-400 p-3">
              <Link to="/coming-soon">Nutrition History</Link>
            </li>
            <li className="bg-sky-400 p-3">
              <Link to="/workout/history">Workout History</Link>
            </li>
            <li className="bg-sky-400 p-3">
              <Link to="/coming-soon">Friends List</Link>
            </li>
          </ul>
        </nav>
        {userPosts?.map((post) => {
          return (
            <div
              key={post.id}
              className="flex flex-col p-6 bg-slate-100 m-6 rounded-xl shadow-2xl"
            >
              <div>
                <div className="flex justify-end mb-2">
                  <p>{formatDate(post.created_at)}</p>
                </div>
                <p>{post.post}</p>
              </div>
              <div className="flex justify-between mt-4">
                <p>❤️{post.likes}</p>
                <Btn btnText="🗑️" click={handleDelete} value={post.id} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
