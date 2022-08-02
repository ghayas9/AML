import React from 'react'
import '../RegisterPage/RegisterPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Register from '../../Components/Register/Register';


const RegisterPage = () => {
  return (
    <div>
        <div>
          <Navbar />
        </div>
        <Register />
    </div>
  )
}

export default RegisterPage