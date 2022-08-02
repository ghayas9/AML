import React from "react";
import "../Register/Register.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  return (
    <div className="registerCompany_main">
      <div className="registerCompany_title">
        REGISTER COMPANY
        </div>
      <div className="registerCompany_subtitle">
        Register new company
        </div>
        <div className='firsTwo_inputFiled_main'>
      <form className="registerInputField_main">
        <label className="ComapnyLabel">
            Company name
            </label>
        <input type="text" className="inputFieldCss" />
        <label className="ContactNumberLabel">
            Contact Number
            </label>
        <input type="text" className="inputFieldCss" />
      </form>
      <form className="other_registerInputField_main">
        <label className="ComapnyLabel">
            Company Email
            </label>
        <input type="text" className="inputFieldCss" />
        <label className="ContactNumberLabel">
            Password
            </label>
        <input type="password" className="inputFieldCss" />
      </form>
      </div>
      <div className="btns_main">
        <div className="CacnelBtn" onClick={() => navigate('/')}>
            Cancel
        </div>
        <div className="registerBtn" onClick={() => navigate('/registercompanies')}>
            Register
        </div>
      </div>
    </div>
  );
};

export default Register;
