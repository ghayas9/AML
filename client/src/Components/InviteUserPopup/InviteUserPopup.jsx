import React from "react";
import "../InviteUserPopup/InviteUserPopup.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PopupIcon from "../../images/popupicon.png";
import { TextField } from "@mui/material";
import SearchBar from "../SearchBar/SearchBar";
import {useNavigate} from 'react-router-dom'

const InviteUserPopup = ({ showPopup, hidePopup }) => {
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
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        onBackdropClick={() => hidePopup()}
      >
        <DialogContent
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={PopupIcon}
            alt="icon"
            style={{ height: "4rem", width: "4rem" }}
          />
          <DialogTitle id="responsive-dialog-title">
            {"Invite user to the project"}
          </DialogTitle>
        </DialogContent>
        <DialogContent style={{ paddingLeft: "5rem", paddingRight: "5rem" }}>
          <SearchBar placeholder={"Enter user email"} />
        </DialogContent>
        <DialogActions
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "7rem",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              height: "2rem",
              width: "15rem",
              backgroundColor: "#2286CC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: 500,
              fontSize: "1.2rem",
              cursor: "pointer",
            }}
            onClick={() => hidePopup()}
          >
            Send Invitation
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InviteUserPopup;
