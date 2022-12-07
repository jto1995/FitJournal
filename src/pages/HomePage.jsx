import FeedCard from "../Components/FeedCard.jsx";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Btn from "../Components/Btn.jsx";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage(user) {
  
  const [posts, setPosts] = useState();

  const getData = () => {
    axios.get("http://localhost:8080/posts")
    .then((response) => {
      setPosts(response.data)
      console.log(response.data)
    })
  };
  useEffect(() => {
    getData();
  }, []);

  function formatDate(value) {
    const length = 10;
    const shortString = value.substring(0, length);
    return shortString;
  }
  return (
    <div>
      <section>
        <div className="bg-gradient-to-r from-green-100 to-sky-300 p-4 h-screen">
          <p>Welcome Back</p>
          <h1 className="text-center text-2xl font-bold py-4">
            Community Feed
          </h1>
          <Btn btnText="New Post" class="mb-4 items-center" />
          {posts?.map((data) => {
            return(
          <FeedCard
            key={data.id}
            name={data.name}
            time={formatDate(data.created_at)}
            post={data.post}
            likes={data.likes}
          />)})}
          <Toaster position="bottom-center" reverseOrder={false}>
            Hello
          </Toaster>
        </div>
      </section>
    </div>
  );
}
