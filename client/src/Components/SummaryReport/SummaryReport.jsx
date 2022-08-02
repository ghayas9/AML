import React from 'react';
import '../SummaryReport/SummaryReport.css';
import IDcardImage from "../../images/idcard.png";

const SummaryReport = () => {
  return (
    <div className="summary_report_main">
      <div className="summaryReport_main_div">
        <div className="summary_report_report_summary_div">Report Summary</div>
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
              className="summary_report_tr_main_div"
              style={{ padding: 15, height: 40, width: "100%" }}
            >
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="summary_report_tr_div">Date</div>
              </td>
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="summary_report_tr_result_div">13/6/2022 3:10</div>
              </td>
            </tr>
            <tr
              className="summary_report_tr_main_div"
              style={{ padding: 15, height: 40, width: "100%" }}
            >
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="summary_report_tr_div">Screening token</div>
              </td>
              <td style={{ padding: 15, height: 40, width: "50%" }}>
                <div className="summary_report_tr_result_div">2bc3333-t676653-7326</div>
              </td>
            </tr>
          </table>
        </div>
        <div className="summary_report_idCardWithImage_main">
          <div className="summary_report_SubmittedFIle_text">Submitted File</div>
          <div className="summary_report_image_Div">
            <img src={IDcardImage} alt="image" className="summary_report_idCardImage" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryReport