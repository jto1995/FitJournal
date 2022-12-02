import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthContext from './context/authContext';

function AuthApp() {
  const { user, logout } = useContext(AuthContext);

  return ( 
    <Routes>
        <Route></Route>
    </Routes>
  );
}

export default AuthApp;