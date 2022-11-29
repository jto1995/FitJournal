import Btn from "../Components/Btn";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SiteHeader from "../Components/SiteHeader";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const isFormValid = () => {
    if (!email) {
      return false;
    }
    if (!password) {
      return;
    }
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      axios
        .post(`http://localhost:8080/login`, {
          email: e.target.email.value,
          password: e.tartget.password.target,
        })
        .then((response) => {
          if (response.data.token) {
            // loadProfile(response.data.token);
            localStorage.setItem("jwt_token", response.data.token);
          }
          navigate("/feed");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Invalid login information");
    }
  };
  return (
    <div>
      <SiteHeader />
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
              onChange={handleChangeEmail}
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
    </div>
  );
}
