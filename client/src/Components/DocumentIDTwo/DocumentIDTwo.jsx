import React from 'react'
import '../DocumentIDTwo/DocumentIDTwo.css';
import TickIcon from "../../images/tick.png";


const DocumentIDTwo = () => {
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
              <div className="two_main_document_User_infoType_css">MRZ</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">VIZ</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_status_css">Valid</div>
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
              <div className="two_main_document_User_infoType_css">Document class code</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">P</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">p</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Issuing country document code in accordance with the standard ISO 3166-1(ICAO, document 9303)</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">UK</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Document number</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Document Expiration date</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">2028-3-15</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">2028-3-15</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Date of birth</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">1990-3-25</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">1990-3-25</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Place of birth</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">UK</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Personal numbers</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">5625627</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Surename</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">Oslo</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">Oslo</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Given name</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">Roni</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">Roni</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Nationality</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">UK Federation</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Sex</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">M</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">M</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Document issuing authority</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Full name</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">Roni Oslo</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">Roni Oslo</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Nationality letter code according to standard ISO 3166-1 (ICAO doc 9303)</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">Uk</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">MRZ type</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">ID-3</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Document Series</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">51</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Document number</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Check digit for document No</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">9</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Check digit for date of birth</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">5</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Check digit for date of expiry</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">7</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">517300917</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Booklet number</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">7547676</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Age</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">40</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">40</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Number of months before the due date expiration of a document</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">45</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">45</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Age at issue</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">39</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">39</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Years since issue</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">0</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
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
              <div className="two_main_document_User_infoType_css">Years since issue</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>
              <div className="two_main_document_User_details_css">{''}</div>
            </td>
            <td style={{ padding: 5, height: 40, width: "30%" }}>              
                <div className="two_main_document_User_details_css">0</div>
            </td>
            <td>
            <div className="two_main_document_tickMain">
                  <img src={TickIcon} alt="tick"/>
                </div>
            </td>
          </tr>              
        </tbody>
      </table>
    </div>
    </>
  )
}

export default DocumentIDTwo