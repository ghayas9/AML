import React from "react";
import "../EmployeeDetailsMain/EmployeeDetails.css";
import CriminalRecord from "../Criminal Record/CriminalRecord";
import UserProfile from "../UserProfile/UserProfile";
import DocumentID from "../DocumentID/DocumentID";
import IdCard from "../IdCard/IdCard";

import { useNavigate, useParams } from "react-router-dom";

//***************API*****************//
import Loading from '../Loading/Loading';
import axios from '../../config/axios';
import { useState } from 'react';
//***************API*****************//

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////

const EmployeeDetails = () => {
  /////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////
const [data ,setData] = useState(null)
const [load,setLoad]=useState(false)
const nv = useNavigate()
const {id}= useParams()
const getData = async()=>{
  try{
    setLoad(true)
    const res = await axios({
      method:'get',
      url:'/company/emailverification/'+id,
      headers:{
        'Authorization': `Bearer ${state.token}`
      }
    }) 
    if(!res.data.data.API){
      nv('/')
    }else{
      setData(res.data.data)
      // console.log(data.API.result);
      console.log(res.data.data);
    }
   
  }catch(err){
    console.log(err);
    action.ErrorMessage({
      title:'Error',
      txt:err.response.data.message
    })
    nv('/')
  }finally{
    setLoad(false)
  }
}

useEffect(()=>{
  if(!state){
    nv('/login')
  }else{
    getData()
  }
},[state])
  return !data ?<Loading/>:(
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100vw" }}>
          <CriminalRecord />
        </div>
        <div>
          <UserProfile data ={{...data.personal,...data.address}} img={data.API.outputface}/>
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "65%" }}>
          <DocumentID data={data.API.result} img = {data.API.output}/>
        </div>
        <div>
          {/* <IdCard /> */}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
