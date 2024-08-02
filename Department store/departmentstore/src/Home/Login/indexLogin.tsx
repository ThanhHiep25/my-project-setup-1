import React from "react";
import "./Css/indexLogin.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { Button, FilledInput, IconButton, InputAdornment } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return "Chào buổi sáng!";
    } else if (hour >= 12 && hour < 18) {
      return "Chào buổi chiều!";
    } else if (hour >= 18 && hour < 22) {
      return "Chào buổi tối!";
    } else {
      return "Khuya rồi ngủ đi nào!";
    }
  };

  // Thay nền màu theo thời gian
  // const getBackgroundColor = () => {
  //   const hour = new Date().getHours();
  //   const maxBrightness = 255;
  //   const minBrightness = 50;
  //   const brightness = Math.round(
  //     ((maxBrightness - minBrightness) * (24 - hour)) / 24 + minBrightness
  //   );
  //   return `rgb(${brightness}, ${brightness}, ${brightness})`;
  // };

  // Thay nền ảnh (chèn opacity) theo thời gian
  const getOverLayColor = () => {
    const hour = new Date().getUTCHours();
    const maxOpacity = 0.8;
    const minOpacity = 0.2;
    const opacity = ((maxOpacity - minOpacity) * hour) / 24 + minOpacity;
    return `rgba(0,0,0, ${opacity})`;
  };
  // Thay màu text dễ nhìn khi nền tối
  const getTextColor = () => {
    const hour = new Date().getUTCHours();
    const maxBrightness = 50;
    const minBrightness = 255;
    const brightness = Math.round(
      ((maxBrightness - minBrightness) * (24 - hour)) / 24 + minBrightness
    );
    return `rgb(${brightness}, ${brightness}, ${brightness})`;
  };

  return (
    <div>
      <div className="container">
        <div
          className="overlay"
          style={{
            backgroundColor: getOverLayColor(),
            transition: "background-color 0.5s",
          }}
        ></div>
        <div className="row">
          <h1 className="title-login">{getGreeting()}</h1>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "50ch", marginTop: "50px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Email" variant="filled" />
          </Box>
          <FormControl sx={{ m: 1, width: "50ch" }} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">
              Password
            </InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword ? "text" : "password"}
              style={{
                color: getTextColor(),
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            style={{
              marginTop: "50px",
            }}
            onClick={() => {
              navigate("/main");
            }}
          >
            <FingerprintIcon /> Đăng nhập
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
