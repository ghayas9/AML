import React, { useState } from "react";
import "../EmployeeDetailsTwo/EmployeeDetailsTwo.css";
import SummaryReport from "../SummaryReport/SummaryReport";
import UserProfileTwo from "../UserProfileTwo/UserProfileTwo";
import DocumentIDTwo from "../DocumentIDTwo/DocumentIDTwo";
import IdCard from "../IdCard/IdCard";


import axios from "../../config/axios";

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
///////////////GET REDUX//////////////

const EmployeeDetailsTwo = () => {
const [data,setData] = useState({})
const {id} = useParams()
  
/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

const getData = async()=>{
    try{
      const res = await axios({
        method:'get',
        url:'/company/scan/'+id,
        headers:{
          "Authorization":"Barer "+state.token
        }
      })
      // console.log(res.data.data);
      setData(res.data.data)
      console.log(data);
    }catch(err){
      console.log(err);
    }
}
const navigate = useNavigate()
useEffect(()=>{
  if(!state){
    navigate('/login')
  }else{
    getData()
  }
},[state])


  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%", }}>
          <SummaryReport />
        </div>
        <div style={{ width: '60%' }}>
          <UserProfileTwo data={data.ScanData.result} />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "65%" }}>
          <DocumentIDTwo data={data.ScanData.result} />
        </div>
        <div>
          <IdCard />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsTwo;
