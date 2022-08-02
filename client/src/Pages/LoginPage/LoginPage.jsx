import React from 'react'
import '../LoginPage/LoginPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Login from '../../Components/Login/Login';


const LoginPage = () => {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Login  />
        </div>
    </div>
  )
}

export default LoginPage