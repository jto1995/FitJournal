import {  useState, useEffect } from "react";
import AuthContext from './authContext'

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({ auth:false});

    const login = () =>{
    setUser(() => ({
        auth:true,
    }))
}

useEffect(() => {
    const jwtToken = sessionStorage.getItem('jwt_token');
    if (jwtToken) {
      setUser(() => ({
        auth: true,
      }))
    }
  }, [])
  

    const logout = () => {
        setUser(() => ({
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