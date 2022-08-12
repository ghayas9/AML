import React, { useState } from "react";
import "../../Pages/CompanyDetails/CompanyDetails.css";
import LoginNavbar from "../../Components/LoginNavbar/LoginNavbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Table from "../../Components/Table/Table";

import axios from "../../config/axios";
/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
///////////////GET REDUX//////////////

const CompanyDetails = () => {

  /////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

const [data ,setData] = useState([])

const getData = async()=>{
  try{
    const res = await axios({
      method:'get',
      url:'/company/emailverification',
      headers:{
        'Authorization': `Bearer ${state.token}`
      }
    })
    setData(res.data.data)
  }catch(err){
    console.log(err);
    alert('some thing went wrong')
  }
}

const navigate = useNavigate()
  useEffect(()=>{
    if(!state){
      navigate('/login')
    }else{
      getData()
      console.log('logined');
    }
  },[state])
  return (
    <div>
      <div>
        <LoginNavbar />
      </div>
      <div>
        <SearchBar
        placeholder={'Search user'}
        />
      </div>
      <div>
        <Table 
        header1 ={''}
        header2={'Name'}
        header3={'External ID'}
        header4={'Nationality'}
        header5={'Created'}
        header6={'Company'}
        data = {data}
        />
      </div>
    </div>
  );
};

export default CompanyDetails;
