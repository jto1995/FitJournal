import Btn from "../Components/Btn";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/authContext";

export default function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => setPassword(e.target.value);
  const api = 'http://localhost:8080'

  const notify = () => toast(`Invalid Login Information 😢`)

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${api}/user/login`, {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then((response) => {
        if (response.data.token) {
          loadProfile(response.data.token);
          sessionStorage.setItem("jwt_token", response.data.token);
        }
        login();
        navigate("/");
        
      })
      .catch((error) => {
        notify();
        console.log(error);
      });
  };

  const loadProfile = (jwtToken) => {
    axios
    .get(`${api}/user`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`
      },
    })
    .then((response) => {
        console.log(response)
        setUser(response.data.user)
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
      <div className="h-screen bg-gradient-to-r from-green-100 to-sky-300">
        <div className="flex flex-col justify-center">
          <h2 className="flex justify-center mt-4 text-xl font-bold">
            Sign Into Your Account
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col p-6 m-6 border-2 shadow-md bg-stone-100 rounded-xl"
          >
            <label className="pb-1" htmlFor="email">
              Email Address
            </label>
            <input
              className="py-1 pl-2 mb-1 italic rounded-xl"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.toLowerCase())}
              placeholder="Email"
            />
            <label className="pb-1" htmlFor="password">
              Password
            </label>
            <input
              className="py-1 pl-2 mb-6 italic rounded-xl"
              type="password"
              value={password}
              onChange={handleChangePassword}
              id="password"
              placeholder="Password"
            />
            <Btn btnText="Login" />
            <div className="flex justify-between mt-4">
              <Link to="/signup" className="font-bold">
                Sign Up!
              </Link>

              <div>
                <p>Forgot Login?</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster  
      position="bottom-center"
      reverseOrder={false}
      />
    </div>
  );
}
