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

  return (
    <div className="container">
      <div className="row">
        <h1>Mở cánh cửa nào !!</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch", marginTop:"50px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Email" variant="filled" />
        </Box>
        <FormControl sx={{ m: 1, width: "50ch" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
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
        <Button variant="contained" style={{
          marginTop: "50px",
        }}
        onClick={()=>{
          navigate("/main")
        }}>
          <FingerprintIcon/> Đăng nhập
        </Button>
      </div>
    </div>
  );
}

export default Login;
