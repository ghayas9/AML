import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProfileImage1 from "../../images/profile1.png";
import ProfileImage2 from "../../images/profile2.png";
import ProfileImage3 from "../../images/profile3.png";
import ProfileImage4 from "../../images/profile4.png";
import ProfileImage5 from "../../images/profile5.png";
import Table from '../Table/Table';
import QuickSearchNavbar from '../QuickSearchNavbar/QuickSearchNavbar';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////
import axios from '../../config/axios';
import { useState } from 'react';
const QuickNameSearch = () => {

  const [employeeDetails,setEmployeeDetails] = useState([])
  const [load,setLoad] = useState(true)

  /////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

  const navigate = useNavigate()

    const getData = async()=>{
      try{
        const res = await axios.get('/company/quicksearch',{
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${state.token}`
          },
          
        })
        // action.SuccessMessage({title:'success',txt:res.data.message})
        console.log(res.data);

        setEmployeeDetails(res.data.data)
        
      }catch(err){
        console.log(err);
      }finally{
        setLoad(false)
      }
    }
  useEffect(()=>{
    if (!state) {
      navigate('/login')
    }else{
      console.log('logined');
      getData()
    }
  },[state])

  return (
    <div>
        <div>
            <QuickSearchNavbar/>
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
              <th className='tableTH'>{'Image'}</th>
              <th className='tableTH'>Name</th>
              <th className='tableTH'>Date Of Birth</th>
              <th className='tableTH'>Nationality</th>
              <th className='tableTH'>AML</th>
            </tr>
          </thead>
          <tbody>
            {
              load?<Loading/>:
              employeeDetails?
              employeeDetails.map((item) => {
                return (
                  <tr className="tablerow tableeven" onClick={() => navigate('/searchresult/'+item._id)}>
              <td className='tableTD'>
                {/* <img src={item.profile} alt="img" className="prsofile_imge_css" /> */}
                NO Recored FOUND
              </td>
              <td className='tableTD'>
                <span>{item.name}</span>
              </td>
              <td className='tableTD'>{item.dob}</td>
              <td className='tableTD'>{item.country}</td>
              <td className='tableTD'>
                {item.amlResult != " " ? 'NO':'YES'}
              </td>
            </tr>
                )
              })
              :<h1 style={{textAlign:'center'}}>NOT FOUND</h1>
            }            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default QuickNameSearch