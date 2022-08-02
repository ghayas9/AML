import React from "react";
import "../UserProfile/UserProfile.css";
import ProfilePicture from "../../images/profilepic.png";
import TickIcon from "../../images/tick.png";

const UserProfile = () => {
  return (
    <div className="UserPRofile_main">
      <div className="User_profile_main">
        <div className="UserNameAndPic">
          <div className="User_profileTitle">User Profile</div>
          <div className="User_prifilePic_div">
            <img
              src={ProfilePicture}
              alt="image"
              className="User_profilePicture_css"
            />
          </div>
        </div>
        <div className="User_profileNameInfo">
          <div className="User_user_name_css">Roni Oslo</div>
          <div className="User_genderAndDOB">
            <div>Male</div>
            <div>{","}1990-3-25</div>
          </div>
        </div>
      </div>
      <div>
        <table
          style={{
            backgroundColor: "white",
            border: "none",
            marginTop: 20,
            width: "94%",
            marginLeft: "3%",
            marginRight: "3%",
            borderCollapse: "collapse",
          }}
          responsive
          size="lg"
        >
          <tbody className="User_tbody">
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Info type</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">Details</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_status_css">Status</div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Gender</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">Male</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Name</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">Roni</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Surname</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">Oslo</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Date of birth</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">1990-3-25</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Pin</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">3241</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Document no</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">245758</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Expiry Date</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">2028-3-15</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Contry of issue</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">UK</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Document Type</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">Passport</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
            <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">Nationality</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">UK</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="tick_with_status">
                  <div className="tickMain">
                    <img src={TickIcon} alt="tick" className="tickIcon" />
                  </div>
                  <div>Extracted</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="last_main_div">
          <td className="criminalRecord_last_div">Criminal Record</td>
          <div className="criminalRecord_details_last_td">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam id
            molestias ipsum dolorum facilis cupiditate, dicta assumenda,
            officiis dolores voluptatem, sapiente maxime ? Suscipit voluptatum
            nemo sit reprehenderit quibusdam ut?
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
