import React from "react";
import "../GlobalComplianceMain/GlobalComplianceMain.css";
import Logo from "../../images/logo.png";
import { useNavigate } from 'react-router-dom';


const GlobalComplianceMain = () => {
  const navigate = useNavigate()
  
  return (
    <div className="Companyverification_main">
      <div className="Company_verification_logo_title_main">
        <img src={Logo} alt="logo" className="image_logo_css" />
        <text className="COmpanyTag">Company</text>
        <span className="NameTag">Name</span>
      </div>
      <div className="subTitle_text">
        <p>You have been invited to verify your identity in the GlobalCompliance platform by Test Company</p>
      </div>
      <div className="Identify_verification_btn_main">
        <div className="identifyVerification_btn" onClick={() => navigate('/multiselectform')}>
            Identify Verification
        </div>
      </div>
      <div className="Why_needed_main">
        <text className="whyNeeded_text">Why it is needed?</text><br/>
        <p className="whyNeeded_description">
        Identity verification ensures that there is a real person behind a process and proves that the one is who he or she claims to be, preventing both a person from carrying out a process on behalf without authorization, and creating false identities or commit fraud.
        </p>
      </div>
    </div>
  );
};

export default GlobalComplianceMain;
