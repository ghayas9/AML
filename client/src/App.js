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
// import QuickSearchNavbar from "./Components/QuickSearchNavbar/QuickSearchNavbar";
import ErrorMessage from './Components/Model/Error'
import SuccessMessage from './Components/Model/Success'
const App = () => {
return(
  <div>
    <Router>
      
      <SuccessMessage/>
      <ErrorMessage/>
      <Routes>
      {/* <Route path="/companydetails" element={<CompanyDetails />} /> */}
      <Route path="/" element={<CompanyDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/registercompanies" element={<RegisterCompanies />} />
        
        <Route path="/quicksearch" element={<QuickNameSearchPage />} />
        <Route path="/quickscan" element={<QuickDocumentScanPage />} />
        <Route path="/searchresult/:id" element={<QuickSearchResultPage/>} />
        <Route path="/employeedetails" element={<EmployeeDetailsMainPage/>} />
        <Route path="/employeesdetails" element={<EmployeeDetailsMainTwo/>} />
      </Routes>
    </Router>
  </div>
)
}

export default App;
