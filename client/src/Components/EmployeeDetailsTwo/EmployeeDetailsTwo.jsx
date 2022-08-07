import React from "react";
import "../EmployeeDetailsTwo/EmployeeDetailsTwo.css";
import SummaryReport from "../SummaryReport/SummaryReport";
import UserProfileTwo from "../UserProfileTwo/UserProfileTwo";
import DocumentIDTwo from "../DocumentIDTwo/DocumentIDTwo";
import IdCard from "../IdCard/IdCard";



const EmployeeDetailsTwo = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40%", }}>
          <SummaryReport />
        </div>
        <div style={{ width: '60%' }}>
          <UserProfileTwo />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "65%" }}>
          <DocumentIDTwo  />
        </div>
        <div>
          <IdCard />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailsTwo;
