import React from 'react'
import Logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

const RegisterCompaniesNavbar = () => {

  const navigate = useNavigate()

  return (
    <div className='main_navbar'>
    <div className='logo_title_main'>
        <div style={{ cursor: 'pointer' }} className='logo_main' onClick={() => navigate('/registercompanies')}>
            <img src={Logo} alt='logo' className="logo_css"  />
        </div>
        <div className='company_title'>
            <text className='company_text'>Company</text>
            <span className='name_text'>Name</span>
        </div> 
    </div>
    </div>
  )
}

export default RegisterCompaniesNavbar