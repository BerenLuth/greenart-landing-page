import GreenartLogo from './assets/greenart_logo.png'
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { GooglePlayButton } from "react-mobile-app-button";
import './App.css'
import { useState } from 'react';
// import { IconButton, Tooltip } from '@mui/material';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function App() {
  const [warningVisible, setWarningVisible] = useState(true);
  const downloadApk = () => {
    setWarningVisible(true);
    // Logic to download the APK file
    window.open('https://greenart-api.s3.eu-west-3.amazonaws.com/general/greenart-v1.apk', '_blank');
  }

  return (
    <>
      <div>
        <a href="https://greenart-project.eu" target="_blank">
          <img src={GreenartLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="card">
        <Button variant="contained" onClick={downloadApk}>
          Download App (.apk)
        </Button>
        {/* <Tooltip title="Need help installing the APK on your Android device?" placement="top" arrow>
          <IconButton color="primary" aria-label="help" onClick={() => setWarningVisible(!warningVisible)}>
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip> */}
        <div className={`apk-install-help ${warningVisible ? 'apk-install-help--visible' : ''}`}>
          <div className="apk-install-help__title">
            ⚠️ Android installation help
          </div>

          <ol className="apk-install-help__steps">
            <li>Tap the <strong>Download APK</strong> button</li>
            <li>Open the downloaded file</li>
            <li>If prompted, tap <strong>Settings</strong></li>
            <li>Enable <strong>Allow from this source</strong></li>
            <li>Go back and tap <strong>Install</strong></li>
          </ol>

          <div className="apk-install-help__note">
            This permission only needs to be enabled once for your browser.
          </div>
        </div>

        <div className="spacer" />
         <Divider style={{ maxWidth: '600px', margin: '0 auto'}}>or</Divider>
        <p>
          Soon available on
        </p>
        <div className="center-div disabled">

         <GooglePlayButton
        url={""}
        theme={"dark"}
        className={"custom-style"}
      />
      </div>
      </div>
    </>
  )
}

export default App
