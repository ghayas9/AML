import React from 'react'
import '../Navbar/Navbar.css';
import Logo from '../../images/logo.png';
import {useNavigate} from 'react-router-dom';

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

const Navbar = () => {

    const navigate = useNavigate();

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////
  return (
    <div className='main_navbar'>
        <div className='logo_title_main'>
            <div  className='logo_main'>
                <img src={Logo} alt='logo' className="logo_css"  />
            </div>
            <div className='company_title'>
                <text className='company_text'>AML</text>
            </div> 
        </div>
        <div className='btns_main_div'>
            {!state?<>
            
            <div className='register_btn_div' onClick={() => navigate('/signup')}>
                Register
            </div>
            <div className='login_btn_div' onClick={() => navigate('/login')}>
                Login
            </div>
            </>:
            <div className='login_btn_div' style={{backgroundColor:'red'}} onClick={() => action.LogOut()}>
            LogOut
            </div>
            }
            
        </div>


    </div>
  )
}

export default Navbar