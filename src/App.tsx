import GreenartLogo from './assets/greenart_logo.png'
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { GooglePlayButton } from "react-mobile-app-button";
import './App.css'

function App() {
  const downloadApk = () => {
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
        <div className="spacer" />
         <Divider style={{ minWidth: '500px'}}>or</Divider>
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
