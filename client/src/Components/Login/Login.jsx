import React from 'react';
import '../Login/Login.css';
import { useNavigate } from "react-router-dom";

//***************API*****************//
import axios from '../../config/axios';
import { useState } from 'react';
//***************API*****************//

const Login = () => {

//***********API***************//
const navigate = useNavigate()

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const LogIn = async()=>{
    console.log(email,password);
    try{
        const res = await axios({
            method:'post',
            url:'/company/login',
            data:{email,password}
          })
          console.log(res.data)
          alert('login successfully')
          navigate('/companydetails')
        //   navigate('/registercompanies')
    }catch(err){
        alert(err.response.data.message)
    }
}

//***********API***************//

    
    
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
                    {/* ADD USE STATE */}
                    <input type='text' className='input_css' value={email} 
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    {/* ADD USE STATE */}
                    <label className='passwordLabel'>
                        Password
                    </label>

                    {/* ADD USE STATE */}
                    <input type='password' className='input_css' value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                    {/* ADD USE STATE */}
                </form>
                <div className='forgotPassword'>
                    Forget Password?
                </div>
                <div className='Login_sumit_butn' onClick={LogIn}>
                    Login
                </div>

            </div>
           
        </div>
    </div>
  )
}

export default Login