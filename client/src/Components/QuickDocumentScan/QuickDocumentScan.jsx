import React, { useEffect, useState } from 'react'
import '../QuickDocumentScan/QuickDocumentScan.css';
import QuickScanNavbar from '../QuickScanNavbar/QuickScanNavbar';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';


import Loading from "../Loading/Loading";

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////
import axios from "../../config/axios";

const QuickDocumentScan = () => {
  
  
/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////


useEffect(()=>{
  if(!state){
    navigate('/login')
  }else{
    getData()
  }
},[state])

const [load,setLoad]=useState(false)
const [list ,setList]=useState([])
const getData = async()=>{
  try{
    setLoad(true)
          
    const res = await axios({
      url:'company/scan',
      method:'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${state.token}`
    },
    })
    setList(res.data.data)
    console.log(res.data.data);
  }catch(err){
    console.log(err);
    action.ErrorMessage({title:'Error',txt:err.response.data.message})
  }finally{
    setLoad(false)
  }
  
}
  const navigate = useNavigate()

  return (
    <div>
        <div>
            <QuickScanNavbar />
        </div>
        <div>
          <SearchBar 
          placeholder={'Search user'}
          />
        </div>
        <div style={{ marginLeft: '4rem', marginRight: '4rem', marginTop: '3rem' }}>
        <table className='tableClass'>
          <thead>
            <tr>
              <th className='tableTH'>{''}</th>
              <th className='tableTH'>Name</th>
              <th className='tableTH'>Douc ID</th>
              <th className='tableTH'>Gender</th>
              <th className='tableTH'>Date Of Birth</th>
              <th className='tableTH'>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {
              load?<Loading/>:
              list.map((item,index) => {
                return (
                  <tr key={index} className="quicktablerow quicktableeven" onClick={() => navigate('/employeesdetails/'+item._id)}>
              <td className='tableTD'>
                <img src={item.ScanData.outputface} alt="img" className="prsofile_imge_css" />
              </td>
              <td className='tableTD'>
                <span>{item.ScanData.result.fullName}</span>
              </td>
              <td className='tableTD'>{item.ScanData.result.documentNumber}</td>
              <td className='tableTD'>{item.ScanData.result.sex}</td>
              <td className='tableTD'>{item.ScanData.result.dob}</td>
              <td className='tableTD'>{item.ScanData.result.nationality_full}</td>
            </tr>
                )
              })
            }            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default QuickDocumentScan