import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import RegisterCompanies from './Pages/RegisterCompanies/RegisterCompanies';
import CompanyDetails from "./Pages/CompanyDetails/CompanyDetails";
import QuickNameSearchPage from './Pages/QuickNameSearchPage/QuickNameSearchPage';
import QuickDocumentScanPage from "./Pages/QuickDocumentScanPage/QuickDocumentScanPage";
import QuickSearchResultPage from "./Pages/QuickSearchResultPage/QuickSearchResultPage";
import EmployeeDetailsMainPage from "./Pages/EmployeeDetailsMainPage/EmployeeDetailsMainPage";
import EmployeeDetailsMainTwo from './Pages/EmployeeDetailsMaintwo/EmployeeDetailsMaintwo';
import EmailVerification from './Components/GlobalComplianceMain/GlobalComplianceMain'
import Multiselectform from './Components/MultiSelectForm/MultiSelectForm'
// import QuickSearchNavbar from "./Components/QuickSearchNavbar/QuickSearchNavbar";
import ErrorMessage from './Components/Model/Error'
import SuccessMessage from './Components/Model/Success'
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
return(
  <div>
    <Router>
      
      <SuccessMessage/>
      <ErrorMessage/>
      <Navbar/>
      <Routes>
      {/* <Route path="/companydetails" element={<CompanyDetails />} /> */}
      <Route path="/" element={<CompanyDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/registercompanies" element={<RegisterCompanies />} />
        
        <Route path="/quicksearch" element={<QuickNameSearchPage />} />
        <Route path="/quickscan" element={<QuickDocumentScanPage />} />
        <Route path="/searchresult/:id" element={<QuickSearchResultPage/>} />
        <Route path="/employeedetails/:id" element={<EmployeeDetailsMainPage/>} />
        <Route path="/employeesdetails/:id" element={<EmployeeDetailsMainTwo/>} />

        <Route path="/emailverification/:id" element={<EmailVerification/>} />
        <Route path="/multiselectform/:id" element={<Multiselectform/>} />



      </Routes>
    </Router>
  </div>
)
}

export default App;
