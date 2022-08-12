import React from "react";
import "../Criminal Record/CriminalRecord.css";
import IDcardImage from "../../images/idcard.png";

const CriminalRecord = ({img}) => {
  return (
    <div className="criminal_record_main">
      <div className="criminal_record_div">Criminal Record</div>
      <div className="criminal_record_main_div">
        <div className="report_summary_div">Report Summary</div>
        <div>
          <table
            style={{
              border: "none",
              marginTop: 20,
              width: "100%",
              borderCollapse: "collapse",
              textAlign: "left",
            }}
            responsive
            size="lg"
          >
            <tr
              className="tr_main_div"
              style={{ padding: 15, height: 40, width: "100%" }}
            >
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="tr_div">Date</div>
              </td>
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="tr_result_div">13/6/2022 3:10</div>
              </td>
            </tr>
            <tr
              className="tr_main_div"
              style={{ padding: 15, height: 40, width: "100%" }}
            >
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="tr_div">Screening token</div>
              </td>
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="tr_result_div">2bc3333-t676653-7326</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="idCardWithImage_main">
          <div className="SubmittedFIle_text">Submitted File</div>
          <div className="image_Div">
            <img src={img} alt="image" className="idCardImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriminalRecord;
