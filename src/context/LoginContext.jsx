import {  useState, useEffect } from "react";
import AuthContext from './authContext'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: '', auth:true});

    const login = (name) =>{
    setUser((user) => ({
        name:true,
        auth:true,
    }))
}

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