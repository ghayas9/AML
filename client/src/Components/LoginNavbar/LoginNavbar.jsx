import React, {useState} from "react";
import "../LoginNavbar/LoginNavbar.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InviteUserPopup from "../InviteUserPopup/InviteUserPopup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LoginNavbar = () => {

  const [showInvitePopup, setShowInvitePopup] = useState(false)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <div className="login_main_navbar">
      <InviteUserPopup 
        showPopup={showInvitePopup}
        hidePopup={() => setShowInvitePopup(false)}
      />
      <div className="tabs_options">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicator={false}
              aria-label="basic tabs example"
            >
              <Tab
                label="Email Verification"
                {...a11yProps(0)}
                sx={{ marginRight: "12rem", fontWeight: 600 }}
                onClick={() => navigate('/')}
              />
              <Tab
                label="Quick Name Search"
                {...a11yProps(1)}
                sx={{ marginRight: "12rem", fontWeight: 600  }}
                onClick={() => navigate('/quicksearch')}
              />
              <Tab
                label="Quick Document Scan"
                {...a11yProps(2)}
                sx={{ marginRight: "7rem", fontWeight: 600  }}
                onClick={() => navigate('/quickscan')}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {/* Item One */}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/* Item Two */}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {/* Item Three */}
          </TabPanel>
        </Box>
        <div className="inviteUser_div" onClick={() => setShowInvitePopup(true)}>
            Invite user
        </div>
      </div>
    </div>
  );
};

export default LoginNavbar;
