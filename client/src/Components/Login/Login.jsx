import React from 'react';
import '../Login/Login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    
  return (
    <div className='loginMain'>
        <div className='AdminLogin__main'>
            <div className='AdminLoginTitle_div'>
                Admin Login
            </div>
            <div className='inputFieldsmain'>
                <form className='inputFieldsFOrm'>
                    <label className='emailLabel'>
                        Email
                    </label>
                    <input type='text' className='input_css' />
                    <label className='passwordLabel'>
                        Password
                    </label>
                    <input type='password' className='input_css' />
                </form>
                <div className='forgotPassword'>
                    Forget Password?
                </div>
                <div className='Login_sumit_butn' onClick={() => navigate('/registercompanies')}>
                    Login
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Login