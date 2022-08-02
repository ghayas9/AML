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

const QuickNameSearch = () => {

  const navigate = useNavigate()

    const employeeDetails = [
        {
            profile:ProfileImage1,
            empName:'Roni',
            empSurname: 'Osla',
            empGender: 'male',
            empDOB: '13/6/1990',
            empNationality: 'UK'
        },
        {
            profile:ProfileImage2,
            empName:'Roni',
            empSurname: 'Osla',
            empGender: 'male',
            empDOB: '13/6/1990',
            empNationality: 'UK'
        },
        {
            profile:ProfileImage3,
            empName:'Roni',
            empSurname: 'Osla',
            empGender: 'male',
            empDOB: '13/6/1990',
            empNationality: 'UK'
        },
        {
            profile:ProfileImage4,
            empName:'Roni',
            empSurname: 'Osla',
            empGender: 'male',
            empDOB: '13/6/1990',
            empNationality: 'UK'
        },
        {
            profile:ProfileImage5,
            empName:'Roni',
            empSurname: 'Osla',
            empGender: 'male',
            empDOB: '13/6/1990',
            empNationality: 'UK'
        },
      ];

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
              <th className='tableTH'>{''}</th>
              <th className='tableTH'>Name</th>
              <th className='tableTH'>Surname</th>
              <th className='tableTH'>Gender</th>
              <th className='tableTH'>Date Of Birth</th>
              <th className='tableTH'>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeDetails.map((item) => {
                return (
                  <tr className="tablerow tableeven" onClick={() => navigate('/searchresult')}>
              <td className='tableTD'>
                <img src={item.profile} alt="img" className="prsofile_imge_css" />
              </td>
              <td className='tableTD'>
                <span>{item.empName}</span>
              </td>
              <td className='tableTD'>{item.empSurname}</td>
              <td className='tableTD'>{item.empGender}</td>
              <td className='tableTD'>{item.empDOB}</td>
              <td className='tableTD'>{item.empNationality}</td>
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

export default QuickNameSearch