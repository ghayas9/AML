import React, { useEffect } from "react";
import "../DocumentID/DocumentID.css";

import TickIcon from "../../images/tick.png";



const DocumentID = ({data}) => {
  useEffect(()=>{
    console.log(data);
  },[])
  return (
    <>
    <div className="ID_document_text">
        ID Document 
    </div>
    <div className="main_document_id_div">  
      <table
        style={{
          backgroundColor: "white",
          border: "none",
          marginTop: 20,
          width: "100%",
          borderCollapse: "collapse",
        }}
        responsive
        size="lg"
      >
        <tbody className="main_document_User_tbody">
          <tr
            style={{
            //   padding: 5,
              height: 40,
              width: "100%",

            }}
          >
            <td style={{ padding: 5, height: 40, width: "40%" }}>
                {''}
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="main_document_User_infoType_css">MRZ</div>
            </td>

            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="main_document_User_details_status_css">Valid</div>
            </td>
          </tr>
          {
            Object.keys(data).map(key=>{
              return(
                <tr
            style={{
              padding: 5,
              height: 40,
              width: "100%",
              borderTop: "1px solid grey",
            }}
          >
            <td style={{ padding: 5, height: 40, width: "40%" }}>
              <div className="main_document_User_infoType_css">{key}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="main_document_User_details_css">{data[key]}</div>
            </td>
            
            <td>
            <div className="main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
                </div>
            </td>
          </tr>
              )
            })
          }
                    
        </tbody>
      </table>
    </div>
    </>
  );
};

export default DocumentID;
