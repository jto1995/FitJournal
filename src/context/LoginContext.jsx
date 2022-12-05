import {  useState, useEffect } from "react";
import AuthContext from './authContext'
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', auth:false});

    const login = () =>{
    setUser((user) => ({
        name:true,
        auth:true,
    }))
}
useEffect(() => {
    const jwtToken = localStorage.getItem('jwt_token');
    if (jwtToken) {
      setUser((user) => ({
        name: jwtToken,
        auth: true,
      }))
    }
  }, [])

  // const loadProfile = (jwtToken) => {
  //   axios
  //   .get(`http://localhost:8080/user/login`, {
  //     headers: {
  //       Authorization: `Bearer ${jwtToken}`
  //     },
  //   })
  //   .then((response) => {
  //   //   setLoggedIn(true);
  //     setUser(response.data.user)
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

    const logout = () => {
        setUser((user) => ({
            name: '',
            auth:false,
        }))
    }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;