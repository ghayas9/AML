import React from "react";
import "../InviteUserPopup/InviteUserPopup.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import PopupIcon from "../../images/popupicon.png";
import SearchBar from "../SearchBar/SearchBar";
import {useNavigate} from 'react-router-dom'

//***************API*****************//

import axios from '../../config/axios';
/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";
///////////////GET REDUX//////////////
//***************API*****************//

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

/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////
/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////
const [email,setEmail] = useState('')
const sendEmail =async()=>{
  try{
    hidePopup()
    const res = await axios({
      method:'post',
      url:'/company/send',
      headers:{
        "Authorization":"Barer "+state.token
      },
      data:{email}
    })

    action.SuccessMessage({
      title:'Success',
      txt:res.data.message
    })
    
  }catch(err){
    console.log(err);
    action.ErrorMessage({
      title:'Error',
      txt:err.response.data.message
    })
  }
}

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
          {/* <SearchBar placeholder={"Enter user email"} /> */}
          <input className="InputFlied" type={'text'}  style={{width:'300px'}}
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
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
            onClick={sendEmail}
          >
            Send Invitation
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InviteUserPopup;
