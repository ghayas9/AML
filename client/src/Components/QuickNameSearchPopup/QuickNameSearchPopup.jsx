import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";
import '../QuickNameSearchPopup/QuickNameSearchPopup.css';
import { useNavigate } from "react-router-dom";


const QuickNameSearchPopup = ({ showPopup, hidePopup }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          {"Quick Name Search"}
        </DialogTitle>
        <DialogContent>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
          <form className="popupinputFieldsFOrm">
            <label className="popupnameLabel">
              Name
            </label>
            <input type="text" className="popupinput_css" />
            <label className="popupGenderLabel">
              Gender
            </label>
            <input type="password" className="popupinput_css" />
          </form>
          <form className="otherpopupinputFieldsFOrm">
            <label className="popupnameLabel">
              Surname
            </label>
            <input type="text" className="popupinput_css" />
            <label className="popupGenderLabel">
              Date Of Birth
            </label>
            <input type="text" className="popupinput_css" />
          </form>
          </div>
          <div>
          <form className="popupinputFieldsFOrm">
            <label className="popupnameLabel_last">
              Nationality
            </label>
            <input type="text" className="popupinput_css_last" />
          </form>
          </div>
        </DialogContent>
        <DialogActions style={{ dispaly: 'flex', justifyContent: 'center' }}>
          <div className="SearchBtn" onClick={() => navigate('/searchresult')}>
            Search
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuickNameSearchPopup;
