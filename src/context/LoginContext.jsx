import {  useState, useEffect } from "react";
import AuthContext from './authContext'
import axios from "axios";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', auth:false});
    
    const login = () =>{
    setUser((user) => ({
        name:"",
        auth:true,
    }))
}
useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwt_token');
    if (jwtToken) {
      setUser((user) => ({
        name: "",
        auth: true,
      }))
    }
  }, [])
  

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