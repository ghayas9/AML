import React, { useState } from "react";
import "../Register/Register.css";
import { useNavigate } from 'react-router-dom'

import Loading from "../Loading/Loading";
import axios from '../../config/axios';
/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////

const Register = () => {

  
/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

const navigate = useNavigate()
  const [load,setLoad]=useState(false)
  const [name,setName]= useState('')
  const [email,setEmail]=useState('')
  const [contact,setContact]=useState('')
  const [password,setPassword]=useState('')

  useEffect(()=>{
    if(state){
      navigate('/')
    }
  },[state])
  
  const registration = async()=>{
    try{
      setLoad(true)
      const res = await axios({
        method:'post',
      url:'/company/register',
      data:{name,password,email,contact}
      })

      action.SuccessMessage({
        title:'Success',
        txt:res.data.message
      })
      navigate('/login')
    }catch(err){
      console.log(err);
      action.ErrorMessage({
        title:'Error',
        txt:err.response.data.message
      })
    }finally{
      setLoad(false)
    }
  }

  return (
    load?<Loading />:<div className="registerCompany_main">
      <div className="registerCompany_title">
        REGISTER COMPANY
        </div>
      <div className="registerCompany_subtitle">
        Register new company
        </div>
        <div className='firsTwo_inputFiled_main'>
      <form className="registerInputField_main">
        <label className="ComapnyLabel">
            Company name
            </label>
        <input type="text" className="inputFieldCss" 
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        />
        <label className="ContactNumberLabel">
            Contact Number
            </label>
        <input type="text" className="inputFieldCss" 
        value={contact}
        onChange={(e)=>setContact(e.target.value)}
        />
      </form>
      <form className="other_registerInputField_main">
        <label className="ComapnyLabel">
            Company Email
            </label>
        <input type="text" className="inputFieldCss" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label className="ContactNumberLabel">
            Password
            </label>
        <input type="password" className="inputFieldCss" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </form>
      </div>
      <div className="btns_main">
        <div className="CacnelBtn" onClick={() => navigate('/')}>
            Cancel
        </div>
        <div className="registerBtn" onClick={registration}>
            Register
        </div>
      </div>
    </div>
  );
};

export default Register;
