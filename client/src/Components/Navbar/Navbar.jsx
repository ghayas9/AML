import React from 'react'
import '../Navbar/Navbar.css';
import Logo from '../../images/logo.png';
import {useNavigate} from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
  return (
    <div className='main_navbar'>
        <div className='logo_title_main'>
            <div  className='logo_main'>
                <img src={Logo} alt='logo' className="logo_css"  />
            </div>
            <div className='company_title'>
                <text className='company_text'>Company</text>
                <span className='name_text'>Name</span>
            </div> 
        </div>
        <div className='btns_main_div'>
            <div className='register_btn_div' onClick={() => navigate('/signup')}>
                Register
            </div>
            <div className='login_btn_div' onClick={() => navigate('/')}>
                Login
            </div>
        </div>


    </div>
  )
}

export default Navbar