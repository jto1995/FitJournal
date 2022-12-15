import FeedCard from "../Components/FeedCard.jsx";
import axios from "axios";
import Btn from "../Components/Btn.jsx";
import { useState } from "react";
import { useEffect } from "react";
import PostModal from "../Components/PostModal.jsx";

export default function HomePage() {
  
  const [posts, setPosts] = useState();
  const [openModal, setOpenModal] = useState(false)
  const [userInfo, setUserInfo] = useState();

  const api = 'http://localhost:8080'
  
  const handlePostSubmit = (e) => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    e.preventDefault();
    const newPost = {
      post: e.target.post.value
    }
    axios
    .post(`${api}/posts`, newPost, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    } )
    .then(() => {
      setOpenModal(false)
      getData();
    })
  }
  
  const getData = () => {
    axios.get("http://localhost:8080/posts")
    .then((response) => {
      setPosts(response.data)
    })
  };
  useEffect(() => {
    getData();
  }, []);

  const handleModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
  }
  function formatDate(value) {
    const length = 10;
    const shortString = value.substring(0, length);
    return shortString;
  }

  const getUser = () => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    axios
    .get(`${api}/user`, {
        headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
    })
    .then((response) => {
        setUserInfo(response.data)
    })
}
useEffect(() => {
    getUser();
},[]);

  return (
    <div>
      <section>
        <div className="bg-gradient-to-r from-green-100 to-sky-300 p-4 mb-10 min-h-screen">
          {userInfo?.map((users)=> {
            return(
            <p key={users.id}>Welcome Back {users.name}</p>
          )})}
          <h1 className="text-center text-2xl font-bold py-4">
            Community Feed
          </h1>
          <Btn btnText="New Post" class="mb-4 items-center" click={handleModal} />
          {posts?.map((data) => {
            return(
          <FeedCard
            key={data.id}
            name={data.name}
            time={formatDate(data.created_at)}
            post={data.post}
            likes={data.likes}
          />)})}
        </div>
      </section>
      {openModal && (<PostModal click={closeModal} handleSubmit={handlePostSubmit}/>)}
    </div>
  );
}
