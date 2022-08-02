import React from "react";
import RegisterCompaniesNavbar from "../RegisterCompaniesNavbar/RegisterCompaniesNavbar";
import ProfilePicture from "../../images/profilepic.png";
import "../QuickSearchResult/QuickSearchResult.css";
import { Table } from "reactstrap";

const QuickSearchResult = () => {
  return (
    <div>
      <div>
        <RegisterCompaniesNavbar />
      </div>
      <div className="mainSearchResult">
        <div className="profile_main">
          <div className="prifilePic_div">
            <img
              src={ProfilePicture}
              alt="image"
              className="profilePicture_css"
            />
          </div>
          <div className="profileNameInfo">
            <div className="profileTitle">User Profile</div>
            <div className="user_name_css">Roni Oslo</div>
            <div className="genderAndDOB">
              <div>Male</div>
              <div>{","}1990-3-25</div>
            </div>
          </div>
        </div>
        <dib>
          <table
            style={{
              backgroundColor: "white",
              border: "none",
              marginTop: 20,
              width: "94%",
              marginLeft: "3%",
              marginRight: "3%",
              borderCollapse: "collapse",
              alignSelf: "center",
            }}
            responsive
            size="lg"
          >
            <tbody className="tbody">
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Info type</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">Details</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Name</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">Roni</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Surname</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">Oslo</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Gender</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">Male</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Nationality</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">UK</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Date Of Birth</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">1990-3-25</div>
                </td>
              </tr>
              <tr
                style={{
                  padding: 15,
                  height: 40,
                  width: "100%",
                  borderTop: "1px solid grey",
                  borderBottom: "1px solid grey",
                }}
              >
                <td style={{ padding: 15, height: 40, width: "40%" }}>
                  <div className="infoType_css">Criminal Record</div>
                </td>
                <td style={{ padding: 15, height: 40, width: "60%" }}>
                  <div className="details_css">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nam id molestias ipsum dolorum facilis cupiditate, dicta
                    assumenda, officiis dolores voluptatem, sapiente maxime
                    nostrum? Suscipit voluptatum nemo sit reprehenderit
                    quibusdam ut?
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </dib>
      </div>
    </div>
  );
};

export default QuickSearchResult;
