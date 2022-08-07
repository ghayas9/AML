import React from "react";
import "../../Pages/CompanyDetails/CompanyDetails.css";
import LoginNavbar from "../../Components/LoginNavbar/LoginNavbar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ProfileImage1 from "../../images/profile1.png";
import ProfileImage2 from "../../images/profile2.png";
import ProfileImage3 from "../../images/profile3.png";
import ProfileImage4 from "../../images/profile4.png";
import ProfileImage5 from "../../images/profile5.png";
import Table from "../../Components/Table/Table";


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

const navigate = useNavigate()
  useEffect(()=>{
    if(!state){
      navigate('/login')
    }else{
      console.log('logined');
    }
  },[state])
  const companyEmployees = [
    {
      profile: ProfileImage1,
      name: "Roni Oslo",
      externalId: "1865746",
      nationality: "UK",
      createdAt: "13/6/2022 3:10",
      companyName: "Test Company",
    },
    {
      profile: ProfileImage2,
      name: "Ane ophlem",
      externalId: "1865746",
      nationality: "AUS",
      createdAt: "13/6/2022 3:10",
      companyName: "Test Company",
    },
    {
      profile: ProfileImage3,
      name: "Wajahat",
      externalId: "1865746",
      nationality: "Pak",
      createdAt: "13/6/2022 3:10",
      companyName: "Test Company",
    },
    {
      profile: ProfileImage4,
      name: "Simon ng",
      externalId: "1865746",
      nationality: "UK",
      createdAt: "13/6/2022 3:10",
      companyName: "Test Company",
    },
    {
      profile: ProfileImage5,
      name: "Subhan",
      externalId: "1865746",
      nationality: "Pak",
      createdAt: "13/6/2022 3:10",
      companyName: "Test Company",
    },
  ];

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
        data = {companyEmployees}
        />
      </div>
    </div>
  );
};

export default CompanyDetails;
