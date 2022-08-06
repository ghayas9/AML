import React, { useEffect, useState } from "react";
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



import Loading from "../Loading/Loading";

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////
import axios from "../../config/axios";

const QuickScanPopup = ({ showPopup, hidePopup }) => {

  
/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////


useEffect(()=>{
  if(!state){
    navigate('/login')
  }
},[state])

  const [front ,setFront]=useState(null)
  const [back ,setBack]=useState(null)

  const [load,setLoad]=useState(false)


  const scanData = async()=>{
    const newForm = new FormData()
    newForm.append('front',front)
    newForm.append('back',back)
    try{
      hidePopup()
      setLoad(true)
      const res = await axios({
        method:'post',
        url:'company/scan',
        data:newForm,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${state.token}`
      }
      })
      action.SuccessMessage({
        title:'Success',
        txt:res.data.message
      })
      console.log(res.data);
    }catch(err){
      console.log(err);
      action.ErrorMessage({
        title:'Error',
        txt:err.response.data.message
      })
    }finally{
      setLoad(false)
    }
  }


  const [open, setOpen] = useState(false);
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
    load?<Loading/>: <div>
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
              id="file1"
              className="input_css"
              accept="png, jpg,jpeg"
              onChange={(e)=>setFront(e.target.files[0])}
            />
            <img
              src={UploadFileImage}
              for="file1"
              alt="image"
              className="uploadImage_css"
            />
            <label for="file1" className="text_css_input">Upload Front Side</label>
          </div>
          <div className="InputField_main">
            <input
              type="file"
              id="file2"
              className="input_css"
              accept="png, jpg,jpeg"
              onChange={(e)=>setBack(e.target.files[0])}
            />
            <img
              src={UploadFileImage}
              alt="image"
              className="uploadImage_css"
              for="file2"
            />
            <label for="file2" className="text_css_input">Upload Back Side</label>
          </div>
        </DialogActions>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="scanBotn" onClick={scanData}>
            Scan
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuickScanPopup;
