import React, { useEffect } from 'react'
import '../DocumentIDTwo/DocumentIDTwo.css';
import TickIcon from "../../images/tick.png";


const DocumentIDTwo = ({data}) => {
  useEffect(()=>{
    console.log(data);
  },[])
  return (
    <>
    <div className="two_ID_document_text">
        ID Document 
    </div>
    <div className="two_main_document_id_div">  
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
        <tbody className="two_main_document_User_tbody">
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
              <div className="two_main_document_User_infoType_css">data</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_status_css">Valid</div>
            </td>
          </tr>

          {
            Object.keys(data).map(key => {
              console.log(key, data[key]);
              return <tr
              style={{
                padding: 5,
                height: 40,
                width: "100%",
                borderTop: "1px solid grey",
              }}
            >
              <td style={{ padding: 5, height: 40, width: "40%" }}>
                <div className="two_main_document_User_infoType_css">{key}</div>
              </td>
              <td style={{ padding: 5, height: 40, width: "30%" }}>
                <div className="two_main_document_User_details_css">{data[key]}</div>
              </td>
             
              <td>
              <div className="two_main_document_tickMain">
                    <img src={TickIcon} alt="tick"/>
                  </div>
              </td>
            </tr>
            })
          }
                       
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DocumentIDTwo