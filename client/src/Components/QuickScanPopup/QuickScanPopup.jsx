import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "../QuickScanPopup/QuickScanPopup.css";
import UploadFileImage from "../../images/uploadimage.png";
import { useNavigate } from "react-router-dom";

const QuickScanPopup = ({ showPopup, hidePopup }) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate()

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={showPopup}
        onBackdropClick={() => hidePopup()}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Quick Document Scan"}
        </DialogTitle>
        <DialogActions style={{ paddingLeft: '2rem', paddingRight: '2rem'}}>
          <div className="InputField_main">
            <input
              type="file"
              id="file"
              className="input_css"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, png, jpg"
            />
            <img
              src={UploadFileImage}
              for="file"
              alt="image"
              className="uploadImage_css"
            />
            <label for="file" className="text_css_input">Upload Front Side</label>
          </div>
          <div className="InputField_main">
            <input
              type="file"
              id="file"
              className="input_css"
              accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, png, jpg"
            />
            <img
              src={UploadFileImage}
              alt="image"
              className="uploadImage_css"
              for="file"
            />
            <label for="file" className="text_css_input">Upload Back Side</label>
          </div>
        </DialogActions>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="scanBotn" onClick={() => navigate('/employeesdetails')}>
            Scan
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuickScanPopup;
