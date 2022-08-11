import React from "react";
import "../EmployeeDetailsMain/EmployeeDetails.css";
import CriminalRecord from "../Criminal Record/CriminalRecord";
import UserProfile from "../UserProfile/UserProfile";
import DocumentID from "../DocumentID/DocumentID";
import IdCard from "../IdCard/IdCard";

const EmployeeDetails = () => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100vw" }}>
          <CriminalRecord />
        </div>
        <div>
          <UserProfile />
        </div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div style={{ width: "65%" }}>
          <DocumentID />
        </div>
        <div>
          <IdCard />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
