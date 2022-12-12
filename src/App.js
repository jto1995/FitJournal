import React, { useContext } from "react";
import "./index.css";
import AuthContext from "./context/authContext";
import AuthApp from "./AuthApp";
import UnauthApp from "./UnAuthApp";


export default function App() {
  const { user } = useContext(AuthContext);

  return user.auth ? <AuthApp /> : <UnauthApp />;
}
