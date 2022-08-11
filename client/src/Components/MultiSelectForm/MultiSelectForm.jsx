import React, { useRef, useState, useEffect, useCallback } from "react";
import "../MultiSelectForm/MultiSelectForm.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Logo from "../../images/logo.png";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import TickIconimage from "../../images/tick.png";
import WelcomeImage from "../../images/welcomeimg.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TungstenOutlinedIcon from "@mui/icons-material/TungstenOutlined";
import MissedVideoCallOutlinedIcon from "@mui/icons-material/MissedVideoCallOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import GIF from "../../images/gif.mov";
import Webcam from "react-webcam";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddIcon from "@mui/icons-material/Add";
import Select, { components } from "react-select";
import LanguageIcon from "@mui/icons-material/Language";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ArticleIcon from "@mui/icons-material/Article";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PassportGif from "../../images/passport.mov";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Radio from "@mui/material/Radio";
import Calendar from "react-input-calendar";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/lab";
import { Input } from "reactstrap";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import IDCardImage from "../../images/idcard.png";
import LoopIcon from "@mui/icons-material/Loop";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import LinearProgress from "@mui/material/LinearProgress";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { ReactMediaRecorder } from "react-media-recorder";
import { DefaultPlayer as Video } from "react-html5video/dist";
import { Player } from 'video-react';


import axios from '../../config/axios'


const videoConstraints = {
  // maxWidth: '50vw',
  facingMode: "environment",
};

const MultiSelectForm = () => {
  // API
  const [name,setName]=useState('')
  const [gender,setGender]= useState('')
  const [citizenship,setCitizenship]= useState('')
  const [dob ,setDob]= useState('')

  const [address,setAddress] = useState('')
  const [post_code,setPost] = useState('')
  const [surname,setSurname]= useState('')
  const [city,setCity] = useState('')
  const [country,setCountry] = useState('')

  const [video,setVideo]=useState(null)
  const [video_base64,setVideo_base64]=useState('')
  const [file,setFile]=useState(null)
  const [file_base64,setFile_base64] = useState('')
  // API

  const ApiCall = async()=>{
    const formdata = new FormData()
    formdata.append("name",name)
    formdata.append("surname",surname)
    formdata.append("dob",dob)
    formdata.append("gender",gender)
    formdata.append("citizenship",citizenship)


    formdata.append("address",address)
    formdata.append("post_code",post_code)
    formdata.append("city",city)
    formdata.append("country",country)


    formdata.append("video",video)
    formdata.append("video_base64",video_base64)
    formdata.append("file",file)
    formdata.append("file_base64",file_base64)

    console.log(formdata);
    try{
      const res = await axios({
        method:'post',
        url:'/company/emailverification/1',
        data:formdata,
        headers:{
          'Content-Type': 'multipart/form-data',
        }
      })
      alert(res.data.message)
    }catch(err){
      console.log(err);
      alert(err.response.data.message)
    }
    
  }

  const webRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const isInitialMount = useRef(true);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [openCamera, setOpenCamera] = useState(false);
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const [playing, setPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [previewVideo, setPreviewVideo] = useState()
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [showRecordingSecondView, setShowRecordingSecondView] = useState(false);
  const [showidentityCheck, setShowIdentityCheck] = useState(false);
  const [showPassportClickView, setShowPassportClickView] = useState(false);
  const [showPersonalFirstView, setShowPersonalFirstView] = useState(false);
  const [showPersonalDetailsSecond, setShowPersonalDetailsSecond] =
    useState(false);
  const [showPersonalDetailsThird, setShowPersonalDetailsThird] =
    useState(false);
  const [showVerifyUploadedDetails, setShowVerifyUploadedDetails] =
    useState(false);
  const [showUploadingFilesView, setShowUploadingFilesView] = useState(false);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    // setShowRecordingInstructions(true);
    // setShowRecording(false);
    console.log(activeStep, "this is active step");
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setGender(event.target.value)
    console.log(event.target.value);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const OptionsData = [
    "Afghanistan",
    "Pakistan",
    "South Africa",
    "Canada",
    "South Asia",
    "Sweeden",
    "India",
    "China",
    "BanglaDesh",
    "South Korea",
    "Canada",
    "United Kingdom",
    "Japan",
  ];

  const citizenOnChange = () => {};

  const options = [
    {
      value: "Afghanistan",
      label: "Afghanistan",
    },
    {
      value: "Pakistan",
      label: "Pakistan",
    },
    {
      value: "South Africa",
      label: "South Africa",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "South Asia",
      label: "South Asia",
    },
    {
      value: "Sweeden",
      label: "Sweeden",
    },
    {
      value: "India",
      label: "India",
    },
    {
      value: "China",
      label: "China",
    },
    {
      value: "BanglaDesh",
      label: "BanglaDesh",
    },
    {
      value: "South Korea",
      label: "South Korea",
    },
    {
      value: "Canada",
      label: "Canada",
    },
    {
      value: "United Kingdom",
      label: "United Kingdom",
    },
    {
      value: "Japan",
      label: "Japan",
    },
    {
      value: "New York",
      label: "New York",
    },
  ];

  const handleRecordYourselfFirst = () => {
    setShowRecordingSecondView(true);
  };

  const handleBackFirstFunc = () => {
    setShowRecordingSecondView(false);
  };

  const handleSecordRecordingCamera = () => {
    setShowRecordingSecondView(false);
    setShowIdentityCheck(true);
  };

  const handleBackSecondFunc = () => {
    setShowIdentityCheck(false);
    setShowRecordingSecondView(true);
  };

  const handlePassportClickFunc = () => {
    setUrl(null);
    setShowPassportClickView(true);
    setShowIdentityCheck(false);
  };

  const handlePassportClick = () => {
    setActiveStep(activeStep + 1);
    setShowPersonalFirstView(true);
    setShowPassportClickView(false);
  };

  const handleBackThirdFunc = () => {
    setOpenCamera(false);
    setShowIdentityCheck(true);
    setShowPassportClickView(false);
  };

  const handleBackfourthFunc = () => {
    setShowPersonalFirstView(false);
    setShowPassportClickView(true);
    setShowPersonalDetailsSecond(false);
    setActiveStep(activeStep - 1);
  };

  const handlePersonalDetailsFirst = () => {
    setShowPersonalDetailsSecond(true);
    setShowPersonalFirstView(false);
  };

  const handleBackFiveFunc = () => {
    setShowPersonalDetailsSecond(false);
    setShowPersonalFirstView(true);
  };

  const handlePersonalDetailsSecond = () => {
    setShowPersonalDetailsThird(true);
    setShowPersonalDetailsSecond(false);
  };

  const handleBackSixFunc = () => {
    setShowPersonalDetailsThird(false);
    setShowPersonalDetailsSecond(true);
  };

  const handlePersonalDetailsThird = () => {
    setShowVerifyUploadedDetails(true);
    setShowPersonalDetailsThird(false);
  };

  const handleBackSevenFunc = () => {
    setShowVerifyUploadedDetails(false);
    setShowPersonalDetailsThird(true);
  };

  const handleSubmitForFinalApprovalButton = () => {
    setShowUploadingFilesView(true);
    setShowVerifyUploadedDetails(false);
    setTimeout(() => {
      setShowUploadingFilesView(false);
      setActiveStep(activeStep + 1);
    }, 10000);
  };

  const HEIGHT = 450;
  const WIDTH = "50%";

  const handleStartVideoRecordingFunc = () => {
    setPlaying(true);
    setSeconds(0);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err,'error')
    );
    setTimeout(() => {
      if (seconds === 10) {
        setPlaying(false);
        setShowRecordingSecondView(false);
        setShowIdentityCheck(true);
        let video = document.getElementsByClassName("app__videoFeed")[0];
        video.srcObject.getTracks()[0].stop();
      }
    }, 10000);
  };

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      if (seconds <= 9) {
        setSeconds(seconds + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const stopVideo = () => {
    setPlaying(false);
    setShowRecordingSecondView(false);
    setShowIdentityCheck(true);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  const handleVideoOnChange = (e) => {
    setVideo(e.target.files[0])
    let files = e.target.files;
    let reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload =(e) => {
      setPreviewVideo(e.target.result)
    }
    

    // return new Promise((resolve, reject) => {
    //   const fileReader = new FileReader();
    //   if (!file) {
    //     alert("please select an image");
    //   } else {
    //     fileReader.readAsDataURL(file);
    //     fileReader.onload = () => {
    //       resolve(fileReader.result);
    //       setPreviewVideo(fileReader.result)
    //      };
    //   }
    //   fileReader.onerror = (error) => {
    //     reject(error);
    //     console.log(reject(error), 'this is error')
    //   };
    // });
  }

  // const handleVideoOnChange = useCallback(async (e) => {
  //   const file = e.target.files[0]
  //   const base64 = await convertToBase64(file)
  //   setPreviewVideo(base64)
  //   e.target.value=''
  // }, [])
   

  const showCameraFunc = () => {
    setOpenCamera(true);
  };

  const uploadFileOnChange = useCallback(async (e) => {
    const file = e.target.files[0];
    setFile(file)
    const base64 = await convertToBase64(file);
    setUrl(base64);
    e.target.value = "";
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      if (!file) {
        alert("please select an image");
      } else {
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
         };
      }
      fileReader.onerror = (error) => {
        reject(error);
        console.log(reject(error), 'this is error')
      };
    });
  };

  const captureImageFunc = React.useCallback(async () => {
    setOpenCamera(false);
    const imgSrc = webcamRef.current.getScreenshot();
    setFile_base64(imgSrc)
    setUrl(imgSrc);
  }, [webcamRef]);

  const retakePictureFunc = () => {
    setOpenCamera(true);
  };

  const onUserMedia = (e) => {
    console.log(e);
  };

  const Options = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input type="checkbox" style={{ border: "2px solid #f0f" }} />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const optionOnChange = (e) => {
    setCountry('pakistan')
  };

  const steps = ["Welcome", "Identity Check", "Personal Detailss", "Success"];

  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#784af4",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#784af4",
      zIndex: 1,
      fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "currentColor",
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <Check className="QontoStepIcon-completedIcon" />
        ) : (
          <div className="QontoStepIcon-circle" />
        )}
      </QontoStepIconRoot>
    );
  }

  QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
  };

  return (
    <>
      <div className="multiSelectForm__main">
        <div className="main">
          <div className="one_Company_verification_logo_title_main">
            <img src={Logo} alt="logo" className="image_logo_css" />
            <text className="COmpanyTag">Company</text>
            <span className="NameTag">Name</span>
          </div>
        </div>
        <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
          <Stepper
            alternativeLabel
            style={{ width: "50vw" }}
            nonLinear
            activeStep={activeStep}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepLabel
                  StepIconComponent={QontoStepIcon}
                  color="inherit"
                  // onClick={handleStep(index)}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {activeStep == 0 && (
          <div className="welcome_main">
            <div className="welcome_title">
              Welcome to our User Verification Portal
            </div>
            <div className="welcome_subTitle">
              Before starting the verification process please make sure:
            </div>
            <div className="points_main_with_pic">
              <div className="points_first_main">
                <div className="point_heading">
                  <div className="tickMain_css">
                    <img
                      src={TickIconimage}
                      alt="icon"
                      className="tick_className"
                    />
                  </div>
                  <text className="heading_text">
                    Your Device camera is working properly
                  </text>
                </div>
                <div className="point_heading">
                  <div className="tickMain_css">
                    <img
                      src={TickIconimage}
                      alt="icon"
                      className="tick_className"
                    />
                  </div>
                  <text className="heading_text">
                    You have a valid Identity Document with you
                  </text>
                </div>
                <div className="point_heading">
                  <div className="tickMain_css">
                    <img
                      src={TickIconimage}
                      alt="icon"
                      className="tick_className"
                    />
                  </div>
                  <text className="heading_text">
                    You have a valid proof of address document
                  </text>
                </div>
                <div className="btns_main">
                  <div className="back_with_backIcon_main" onClick={handleBack}>
                    <ArrowBackIcon style={{ paddingRight: "5px" }} />
                    Back
                  </div>
                  <div className="start_verification_btn" onClick={handleNext}>
                    Start Verification
                  </div>
                </div>
              </div>
              <div className="points_second_main">
                <img
                  src={WelcomeImage}
                  alt="image"
                  className="image_2nd_welcome"
                />
              </div>
            </div>
          </div>
        )}
        {activeStep == 1 &&
          !showRecordingSecondView &&
          !showidentityCheck &&
          !showPassportClickView &&
          !showPersonalFirstView && (
            <div className="identity_check_main">
              <div className="identity_check_title">Record yourself</div>
              <div className="identity_check_subTitle">
                NOTE: On the next page you will be required to make a video of
                yourself. For a faster and more comfortable user experience
                please keep these tips in mind:
              </div>
              <div className="recording_instructions_main">
                <div className="instruction_with_icon_main">
                  <div className="icon_img_className">
                    <TungstenOutlinedIcon />
                  </div>
                  <text style={{ paddingLeft: "1rem" }}>
                    Make sure your face is well lit.
                  </text>
                </div>
                <div className="instruction_with_icon_main">
                  <div className="icon_img_className">
                    <MissedVideoCallOutlinedIcon />
                  </div>
                  <text style={{ paddingLeft: "1rem" }}>
                    Make sure the camera is on the same level as your face.
                  </text>
                </div>
                <div className="instruction_with_icon_main">
                  <div className="not_allowed_icon_img_className">
                    <BlockOutlinedIcon />
                  </div>
                  <text style={{ paddingLeft: "1rem" }}>
                    Make sure to remove your glasses if they are not present in
                    the identity document picture. If you must wear medical
                    glasses, please make sure there are no reflections that
                    would cover your eyes.
                  </text>
                </div>
                <div className="instruction_with_icon_main">
                  <div className="not_allowed_icon_img_className">
                    <BlockOutlinedIcon />
                  </div>
                  <text style={{ paddingLeft: "1rem" }}>
                    Please do not wear any head accessories if they are not
                    present in the identity document picture.
                  </text>
                </div>
              </div>
              <div className="identity_check_btns_main">
                <div className="back_with_backIcon_main" onClick={handleBack}>
                  <ArrowBackIcon style={{ paddingRight: "5px" }} />
                  Back
                </div>
                <div
                  className="identity_check_start_verification_btn"
                  onClick={handleRecordYourselfFirst}
                >
                  Next Step
                </div>
              </div>
            </div>
          )}
        {activeStep == 1 && showRecordingSecondView && (
          <div className="identity_check_main">
            <div className="identity_check_title">Record yourself</div>
            <div className="identity_check_subTitle">
              Record a video of yourself using your device camera
            </div>
            {playing ? (
              <>
                <video
                  height={HEIGHT}
                  width={WIDTH}
                  muted
                  autoPlay
                  className="app__videoFeed"
                ></video>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <div className="stop_recording_n_timer" onClick={stopVideo}>
                    Stop Recording{" "}
                    <text style={{ paddingLeft: "10px" }}>
                      00:{seconds < 10 ? "0" + seconds : seconds}
                      {"/00:10"}
                    </text>
                  </div>
                </div>
              </>
            ) : 
              
              <div className="recordingScreen_main_for_vid">
                 {/* <Player
                  playsInline
                  poster="/assets/poster.png"
                    src={previewVideo}
                   /> */}
                <video autoPlay loop muted >
                  <source src={previewVideo} type="video/mp4" />
                </video>
                {/* <Video autoPlay loop muted
                  controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
                  onCanPlayThrough={() => {
                      // Do stuff
                  }}>
                  <source src={previewVideo} type="video/webm" />
                  <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
                </Video> */}
                <div className="gifMain">
                  <video autoPlay loop muted className="gif_css">
                    <source src={GIF} type="video/mp4" />
                  </video>
                  <div className="vid_headings">
                    <div className="vidHeading_options">
                      <span className="number_one">1.</span> Facing the device
                      camera for a few seconds
                    </div>
                    <div className="vidHeading_options">
                      <span className="number_one">2.</span> Then turn your head
                      to the right and to the left
                    </div>
                  </div>
                </div>
                <div className="Vid_recording_main">
                  <div
                    className="start_video_recording_main"
                    onClick={handleStartVideoRecordingFunc}
                  >
                    <div className="start_video_recording_icon">
                      <VideocamIcon />
                    </div>
                    <text className="start_video_recording_text">
                      Start video recording
                    </text>
                  </div>
                </div>
              </div>
            }

            <div className="upload_vid_main">
              <div className="upload_vid_btn">
                <input
                  type="file"
                  id="file"
                  accept="video/mp4,video/x-m4v,video/*,video/mov,video/avi,video/webm"
                  className="mp4File_css"
                  onChange={(e) => handleVideoOnChange(e)}
                />
                <AddIcon style={{ paddingRight: "5px" }} />
                <label for="file" style={{ cursor: "pointer" }}>
                  Upload Video
                </label>
              </div>
              <div className="supported_formats">
                Supported formats: mp4, avi, mov, webm
              </div>
            </div>
            <div className="identity_check_btns_main">
              <div
                className="back_with_backIcon_main"
                onClick={handleBackFirstFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              <div
                className="identity_check_start_verification_btn"
                onClick={handleSecordRecordingCamera}
              >
                Next Step
              </div>
            </div>
          </div>
        )}
        {activeStep == 1 && showidentityCheck && (
          <div>
            <div className="identity_check_main">
              <div className="identity_check_title">Identity Check</div>
              <div className="identity_check_subTitle">
                Please select Identity Document
              </div>
            </div>
            <div className="dropDown_With_label">
              <label className="document_country">
                DOCUMENT COUNTRY OF ISSUE
              </label>
              <div className="dropdown">
                <Select
                  isMulti
                  closeMenuOnSelect={true}
                  hideSelectedOptions={true}
                  components={{ Options }}
                  onChange={optionOnChange}
                  allowSelectAll={false}
                  isSearchable={true}
                  autoFocus
                  // value={}
                  options={options}
                />
              </div>
            </div>
            <div className="Document_type_main">
              <div className="document_type_title">DOCUMENT TYPE</div>
              <div className="Type_main" onClick={handlePassportClickFunc}>
                <div className="globe_main">
                  <LanguageIcon />
                </div>
                <div className="text_between_main">Passport</div>
                <div className="Forward_icon_main">
                  <div className="forward_icon_div">
                    <ChevronRightIcon />
                  </div>
                </div>
              </div>
              <div className="Credit_score_Type_main">
                <div className="ArticleIcon_main">
                  <CreditScoreIcon />
                </div>
                <div className="text_between_main">ID Card</div>
                {/* <div className="Forward_icon_main">
                <div className="forward_icon_div">
                <ChevronRightIcon />
                </div>
              </div> */}
              </div>
              <div className="Article_Type_main">
                <div className="ArticleIcon_main">
                  <ArticleIcon />
                </div>
                <div className="text_between_main">Driving Licence</div>
                {/* <div className="Forward_icon_main">
                <div className="forward_icon_div">
                <ChevronRightIcon />
                </div>
              </div> */}
              </div>
            </div>
            <div className="identity_check_btns_main_second">
              <div
                className="back_with_backIcon_main_second"
                onClick={handleBackSecondFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              {/* <div
                className="identity_check_start_verification_btn"
                onClick={handleSecordRecordingCamera}
              >
                Next Step
              </div> */}
            </div>
          </div>
        )}
        {activeStep == 1 && showPassportClickView && (
          <div className="identity_check_main">
            <div className="identity_check_title">Front of your Passport</div>
            <div className="identity_check_subTitle">
              Take a picture or upload your identity document
            </div>
            {openCamera ? (
              <>
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  screenshotForma="image/png"
                  videoConstraints={videoConstraints}
                  onUserMedia={onUserMedia}
                  mirrored={true}
                />
                <div
                  className="photo_capture_button"
                  onClick={captureImageFunc}
                >
                  Take a photo
                </div>
              </>
            ) : (
              <div className="Passport_view_main">
                {url ? (
                  <div>
                    <img src={url} alt="screenshot" style={{ width: "100%" }} />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        className="retake_photo_button"
                        onClick={retakePictureFunc}
                      >
                        Retake the Photo
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="gifMain">
                      <video autoPlay loop muted className="gif_css">
                        <source src={PassportGif} type="video/mp4" />
                      </video>
                      <div className="vid_headings">
                        <div className="vidHeading_options">
                          Please scan the first page of your passport
                        </div>
                      </div>
                    </div>
                    <div className="Vid_recording_main">
                      <div
                        className="start_video_recording_main"
                        onClick={showCameraFunc}
                      >
                        <div className="start_video_recording_icon">
                          <CameraAltIcon />
                        </div>
                        <text className="Passport_start_video_recording_text">
                          Take a Photo
                        </text>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            <div className="Passport_upload_vid_main">
              <div className="upload_vid_btn">
                <input
                  type="file"
                  id="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="mp4File_css"
                  onChange={(e) => uploadFileOnChange(e)}
                />
                <AddIcon style={{ paddingRight: "5px" }} />
                <label for="file" style={{ cursor: "pointer" }}>
                  Upload Photo
                </label>
              </div>
              <div className="supported_formats">
                Supported formats: jpg, png, helc
              </div>
            </div>
            <div className="passport_btns_main">
              <div
                className="passport_back_with_backIcon_main"
                onClick={handleBackThirdFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              {url ? (
                <div
                  className="Passport_next_step_btn"
                  onClick={handlePassportClick}
                >
                  Next Step
                </div>
              ) : (
                <div className="disabled_Passport_next_step_btn">Next Step</div>
              )}
            </div>
          </div>
        )}
        {activeStep == 2 && showPersonalFirstView && (
          <div className="identity_check_main">
            <div className="identity_check_title">
              Confirm your personal details
            </div>
            <div className="personalDetails_title">
              <div className="personalDetails_title_div">Personal Details</div>
              <div className="personal_details_line"></div>
            </div>
            <div className="radio_btn_with_input_field">
              <div className="Radio_buttons_main">
                <label className="radio_label_title">Title</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Radio
                    checked={selectedValue === "male"}
                    onChange={handleChange}
                    value="male"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                  />{" "}
                  <span style={{ marginRight: "10px" }}>Mr</span>
                  <Radio
                    checked={selectedValue === "female"}
                    onChange={handleChange}
                    value="female"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "B" }}
                  />{" "}
                  Mrs
                </div>
              </div>
              <div className="input_filed_main">
                <label for="birthday" className="label_DOB">
                  Date of Birth
                </label>
                <div className="calender_div">
                  <input
                    type="date"
                    id="birthday"
                    className="input_field_csss"
                    onChange={(e)=>setDob(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="second_input_main">
              <div className="one_input_main">
                <label className="Label_css_for_all">Given names</label>
                <input
                  type="text"
                  placeholder="Given Names"
                  className="Input_css_for_All"
                  onChange={(e)=>setName(e.target.value)}
                />
              </div>
              <div className="another_input_main">
                <label className="Label_css_for_all">Surname</label>
                <input
                  type="text"
                  placeholder="Your Surname"
                  className="Input_css_for_All"
                  onChange={(e)=>setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="third_input_main">
              <div className="one_input_main">
                <label className="Label_css_for_all_Citizen">CITIZENSHIP</label>
                <Input
                  type="select"
                  className="citizenship_dropdown"
                  placeholder="Your citizenship"
                  name="citizenship"
                  onChange={(e)=>setCitizenship(e.target.value)}
                  style={{
                    paddingRight: "10px",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    border: "1px solid #B5B3B3",
                    height: "3rem",
                  }}
                >
                  <option className="Your_citizenship">Your citizenship</option>
                  {options.map((item) => {
                    return <option>{item.label}</option>;
                  })}
                </Input>
              </div>
              <div className="input_filed_main">
                <label for="birthday" className="label_DOB">
                  IDENTITY DOCUMENT EXPIRATION DATE
                </label>
                <div className="calender_div">
                  <input
                    type="date"
                    id="birthday"
                    className="input_field_csss"
                    onChange={e=>setDob(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="both_btns_main">
              <div
                className="back_back_with_backIcon_main"
                onClick={handleBackfourthFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              <div
                className="input_filed_next_step_btn"
                onClick={handlePersonalDetailsFirst}
              >
                Next Step
              </div>
            </div>
          </div>
        )}

        {activeStep == 2 && showPersonalDetailsSecond && (
          <div className="identity_check_main">
            <div className="identity_check_title">
              Confirm your personal details
            </div>
            <div className="identity_check_subTitle">
              NOTE! On the next page you will be required to upload a 'Proof of
              Address' document. Please make sure your document meets these
              requirements:
            </div>
            <div className="confirm_details_instructions_main">
              <div className="full_one_instruction_main">
                <div className="icon_full_one_instruction">
                  <FilePresentIcon />
                </div>
                <div className="text_full_instruction_main">
                  Main requirements: provide a good quality picture of the proof
                  of address document with all the corners and sides visible, or
                  an original PDF file with all pages included.
                </div>
              </div>
              <div className="full_one_instruction_main">
                <div className="icon_full_one_instruction">
                  <TextSnippetIcon />
                </div>
                <div className="text_full_instruction_main">
                  Acceptable types: Electricity bills, internet bills, gas
                  bills, water bills, landline phone bills; personal bank
                  account statements; and governmental documents
                </div>
              </div>
              <div className="full_one_instruction_main">
                <div className="icon_below_full_one_instruction">
                  <VideoFileIcon />
                </div>
                <div className="text_full_instruction_main">
                  'Proof of Address' documents that were issued longer than 3
                  months ago from today’s date will not be accepted.
                </div>
              </div>
              <div className="last_one_instruction_main">
                <div className="icon_below_full_one_instruction">
                  <ArticleIcon />
                </div>
                <div className="text_full_instruction_main">
                  'Proof of Address' documents that do not include your full
                  name, full address details and/or date of document issue will
                  not be accepted.
                </div>
              </div>
            </div>
            <div className="Last_one_both_btns_main">
              <div
                className="back_back_with_backIcon_main"
                onClick={handleBackFiveFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              <div
                className="input_filed_next_step_btn"
                onClick={handlePersonalDetailsSecond}
              >
                Next Step
              </div>
            </div>
          </div>
        )}
        {activeStep == 2 && showPersonalDetailsThird && (
          <div className="identity_check_main">
            <div className="identity_check_title">
              Confirm your personal address
            </div>
            <div className="confirm_details_personalDetails_title">
              <div className="confirm_details_personalDetails_title_div">
                Address
              </div>
              <div className="confirm_detials_personal_details_line"></div>
            </div>
            <div className="second_input_main">
              <div className="one_input_main">
                <label className="Label_css_for_all">ADDRESS *</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="Input_css_for_All"
                  onChange={e=>setAddress(e.target.value)}
                />
              </div>
              <div className="another_input_main">
                <label className="Label_css_for_all">CITY *</label>
                <input
                  type="text"
                  placeholder="City"
                  className="Input_css_for_All"
                  onChange={e=>setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="second_input_main">
              <div className="one_input_main">
                <label className="Label_css_for_all">POST CODE *</label>
                <input
                  type="text"
                  placeholder="Post Code"
                  className="Input_css_for_All"
                  onChange={e=>setPost(e.target.value)}
                />
              </div>
              <div className="one_input_main">
                <label className="Label_css_for_all_Citizen">
                  COUNTRY OF RESIDENCE *
                </label>
                <Input
                  type="select"
                  className="citizenship_dropdown"
                  placeholder="Your citizenship"
                  name="citizenship"
                  onChange={citizenOnChange}
                  style={{
                    paddingRight: "10px",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    border: "1px solid #B5B3B3",
                    height: "3rem",
                  }}
                >
                  <option className="Your_citizenship">Your Country</option>
                  {options.map((item) => {
                    return <option>{item.label}</option>;
                  })}
                </Input>
              </div>
            </div>
            <div className="upload_address_main">
              <div className="upload_address_btn">
                <input
                  type="file"
                  id="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="addressFile_css"
                />
                <AddIcon style={{ paddingRight: "5px" }} />
                <label for="file" style={{ cursor: "pointer" }}>
                  Upload Your proof of Address
                </label>
              </div>
              <div className="supported_formats">
                Supported formats: pdf, jpg, jpeg, png
              </div>
            </div>
            <div className="Last_one_both_btns_main">
              <div
                className="back_back_with_backIcon_main"
                onClick={handleBackSixFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              <div
                className="input_filed_next_step_btn"
                onClick={handlePersonalDetailsThird}
              >
                Next Step
              </div>
            </div>
          </div>
        )}
        {activeStep == 2 && showVerifyUploadedDetails && (
          <div className="identity_check_main">
            <div className="identity_check_title">
              Verify your provided information
            </div>
            <div className="verify_passport_address_main">
              <div className="verify_passport_main">
                <div className="verify_Information_title">Passport</div>
                <div className="uploaded_passport_picture">
                  <img
                    src={IDCardImage}
                    alt="img"
                    className="verified_passport_uploaded_image"
                  />
                </div>
              </div>
              <div className="verify_address_info_main">
                <div className="verify_Information_title">
                  Address Information
                </div>
                <div className="uploaded_passport_picture">
                  <img
                    src={WelcomeImage}
                    alt="img"
                    className="uploaded_address_image_css"
                  />
                </div>
              </div>
            </div>
            <div className="Reupload_btns_and_instructions_main">
              <div className="Reupload_btn_main">
                <LoopIcon style={{ paddingRight: "10px" }} />
                Reupload
              </div>
              <div className="reupload_instructions">
                <PriorityHighIcon style={{ color: "#DC3546" }} />
                <div className="Please_make_sure_reupload">
                  Please make sure the documents are in focus and clearly
                  visible
                </div>
              </div>
            </div>
            <div className="Last_one_both_btns_main">
              <div
                className="back_back_with_backIcon_main"
                onClick={handleBackSevenFunc}
              >
                <ArrowBackIcon style={{ paddingRight: "5px" }} />
                Back
              </div>
              <div
                className="input_filed_next_step_btn"
                onClick={()=>{
                  ApiCall()
                  handleSubmitForFinalApprovalButton()
                } 
                }
              >
                Submit for a Final Approval
              </div>
            </div>
          </div>
        )}
        {activeStep == 2 && showUploadingFilesView && (
          <div className="Uploading_your_files_main">
            <div className="uploading_your_files_title">
              Uploading your files...
            </div>
            <Box sx={{ width: "50vw" }}>
              <LinearProgress />
            </Box>
            <div className="uploading_files_instruction">
              <div className="icon_with_text">
                <AccessTimeIcon
                  style={{ paddingRight: "10px", color: "white" }}
                />
                Please wait while your files are being uploaded
              </div>
              <div className="icon_with_text">
                <SwipeLeftIcon
                  style={{ paddingRight: "10px", color: "white" }}
                />
                Please do not close your browser window
              </div>
            </div>
          </div>
        )}
        {activeStep == 3 && (
          <div className="submitted_last_screen">
            <div className="thank_you_div">
              <div className="tick_with_thanks_title">
                <div className="tick_icon">
                  <CheckOutlinedIcon />
                </div>
                Thank you!
              </div>
              <div className="thank_you_description">
                You have completed the user verification process. Your
                application is currently under review.
              </div>
              <div className="done_btn" onClick={
                () => {
                window?.close()
                }
                }>
                Done
              </div>
            </div>
            <div className="last_screen_image">
              <img src={WelcomeImage} alt="img" className="Welcome_Image_css" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultiSelectForm;
