import React, { useEffect } from "react";
import "../UserProfile/UserProfile.css";

import TickIcon from "../../images/tick.png";

const UserProfile = (p) => {
  const {data ,img } = p
  useEffect(()=>{
    console.log(p);
    
  },[])
  return (
    <div className="UserPRofile_main">
      <div className="User_profile_main">
        <div className="UserNameAndPic">
          <div className="User_profileTitle">User Profile</div>
          <div className="User_prifilePic_div">
            <img
              src={img}
              alt="image"
              className="User_profilePicture_css"
            />
          </div>
        </div>
        <div className="User_profileNameInfo">
          <div className="User_user_name_css">{data.name}</div>
          <div className="User_genderAndDOB">
            <div>{data.gender}</div>
            <div>{","}{data.dob}</div>
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
            

            {
              Object.keys(data).map(key=>{
                return (
                  <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_infoType_css">{key}</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="User_details_css">{data[key]}</div>
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
                )
              })
            }
            
           
          </tbody>
        </table>
        <div className="last_main_div">
          <td className="criminalRecord_last_div">Criminal Record</td>
          <div className="criminalRecord_details_last_td">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
