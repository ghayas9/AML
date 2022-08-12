import React from 'react'
import { useNavigate } from 'react-router-dom';

const Table = ({data, header1, header2,header3  , header4,header5 ,header6 }) => {

  const navigate = useNavigate()

  return (
    <div style={{ marginLeft: '4rem', marginRight: '4rem', marginTop: '3rem' }}>
        <table className='tableClass'>
          <thead>
            <tr>
              <th className='tableTH'>{header1}</th>
              <th className='tableTH'>{header2}</th>
              <th className='tableTH'>{header3}</th>
              <th className='tableTH'>{header4}</th>
              <th className='tableTH'>{header5}</th>
              <th className='tableTH'>{header6}</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item) => {
                return (
                  <tr className="tablerow tableeven" onClick={() => navigate('/employeedetails/'+item._id)}>
              <td className='tableTD'>
                <img src={item.profile} alt="img" className="prsofile_imge_css" />
              </td>
              <td className='tableTD'>
                <span>{item.name}</span>
              </td>
              <td className='tableTD'>{item.externalId}</td>
              <td className='tableTD'>{item.nationality}</td>
              <td className='tableTD'>{item.createdAt}</td>
              <td className='tableTD'>{item.companyName}</td>
            </tr>
                )
              })
            }            
          </tbody>
        </table>
      </div>
  )
}

export default Table