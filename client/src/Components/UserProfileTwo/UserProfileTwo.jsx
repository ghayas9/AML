import React from 'react'
import '../UserProfileTwo/UserProfileTwo.css';
import ProfilePicture from "../../images/profilepic.png";
import TickIcon from "../../images/tick.png";


const UserProfileTwo = () => {
  return (
    <div className="user_profile_UserPRofile_main">
    <div className="user_profile_User_profile_main">
      <div className="user_profile_UserNameAndPic">
        <div className="user_profile_User_profileTitle">User Profile</div>
        <div className="user_profile_User_prifilePic_div">
          <img
            src={ProfilePicture}
            alt="image"
            className="user_profile_User_profilePicture_css"
          />
        </div>
      </div>
      <div className="user_profile_User_profileNameInfo">
        <div className="user_profile_User_user_name_css">Roni Oslo</div>
        <div className="user_profile_User_genderAndDOB">
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
        <tbody className="user_profile_User_tbody">
          <tr
            style={{
              padding: 5,
              height: 40,
              width: "100%",
              borderTop: "1px solid grey",
            }}
          >
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_infoType_css">Info type</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Details</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_status_css">Status</div>
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
              <div className="user_profile_User_infoType_css">Gender</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Male</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Name</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Roni</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Surname</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Oslo</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Date of birth</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">1990-3-25</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Nationality</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Uk</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Pin</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">3241</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Document no</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">245758</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Expiry d  ate</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">2028-3-15</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              <div className="user_profile_User_infoType_css">Country of issue</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">UK</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
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
              borderBottom: "1px solid grey",
            }}
          >
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_infoType_css">Document Type</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_User_details_css">Passport</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="user_profile_tick_with_status">
                <div className="user_profile_tickMain">
                  <img src={TickIcon} alt="tick" />
                </div>
                <div>Extracted</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default UserProfileTwo