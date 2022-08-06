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
import { useNavigate, useParams } from "react-router-dom";



//***************API*****************//
import Loading from '../Loading/Loading';

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////
import axios from '../../config/axios';
//***************API*****************//

const QuickNameSearchPopup = ({ showPopup, hidePopup }) => {

  
/////////////SET REDUX//////////////
const dispatch = useDispatch()
const action = bindActionCreators(actionCreator, dispatch)
/////////////SET REDUX//////////////

/////////////GET REDUX//////////////
const state = useSelector((state) => state.LogIn)
/////////////GET REDUX//////////////

//***************API*****************//
const [name , setName]=useState('')
const [dob,setDob]=useState('')
const [country,setCountry]=useState('')
const [documentnumber,setDocu]=useState('')

const aml = async()=>{
  const body = {name,dob,country,documentnumber}
  try{
    hidePopup()
    const res = await axios({
      method:'post',
      url:'/company/aml',
      headers:{
        "Authorization":"Barer "+state.token
      },
      data:body
    })
    navigate('/searchresult/'+res.data.result._id)
    action.SuccessMessage({
      title:'Success',
      txt:res.data.message
    })
    console.log(res.data);
  }catch(err){
    console.log(err.response.data);
    action.ErrorMessage({title:'Error',txt:err.response.data.message})
  }
}
//***************API*****************//
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
            {/* useState */}
            <input type="text" className="popupinput_css" 
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder={'Enter Name'}
            />
            <label type='text' className="popupGenderLabel">
            Country
            </label>
            <input className="popupinput_css" 
            value={country}
            onChange={(e)=>setCountry(e.target.value)}
            placeholder={'Enter Country ISO'}

            />
          </form>
          <form className="otherpopupinputFieldsFOrm">
            <label className="popupnameLabel">
            Document Number
            </label>
            <input type="text" className="popupinput_css" 
            value={documentnumber}
            onChange={(e)=>setDocu(e.target.value)}
            placeholder={'Enter Document Number'}
            />
            <label className="popupGenderLabel">
              Date Of Birth
            </label>
            <input type="text" className="popupinput_css" 
            value={dob}
            onChange={(e)=>setDob(e.target.value)}
            placeholder={'YYYY-MM-DD'}
            />
          </form>
          </div>
          <div>

          </div>
        </DialogContent>
        <DialogActions style={{ dispaly: 'flex', justifyContent: 'center' }}>
          <div className="SearchBtn" onClick={aml}>
          
            Search
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default QuickNameSearchPopup;
