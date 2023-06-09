import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import TextField from "@mui/material/TextField";
import LoginForm from "../../components/loginForm";
import Input from "@mui/material/Input";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(" ");

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (event) => {
    // setUser(event.target.value);
  };

  const handlePasswordChange = (event) => {
    // setPassword(event.target.value);
  };
  const handleSubmit = () => {
    console.log("username");
    console.log("password");
  };

  return (
    <div className="parentContainer">
      <div className="headContainer">
        <div className="logoImg">
          <img
            style={{
              height: 160,
              width: 160,
            }}
            src="https://d1imxxadwppi1q.cloudfront.net/logo/fxp_main_logo.svg"
            alt="FXPRIMUS"
          />
        </div>
        <div className="headerbtnContainer">
          <div className="enIcon">
            <span>EN</span>
            <AiOutlineDown />
          </div>
          <div className="OpenIcon">
            <h5 className="OpenIcontext">Open An Account</h5>
            <AiOutlineRight className="rightIcon" />
          </div>
        </div>
      </div>
      <hr className="divider" />
      <div className="loginContainer">
        <div className="loginContainerFrom">
          <h1 className="headerTital">Log in to client area</h1>
          <div className="formContainer">
            <form onSubmit={handleSubmit} className="formItems">
              <div className="form-group">
                <TextField
                  username
                  id="standard-error-helper-text"
                  label="Username*"
                  helperText="This is a requried field."
                  variant="standard"
                  sx={{ m: 1, width: "45ch" }}
                />
              </div>

              <div className="form-group">
                <FormControl sx={{ m: 1, width: "45ch" }} variant="standard">
                  <InputLabel htmlFor="standard-adornment-password">
                    Password*
                  </InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <div className="btnContainer">
                <button type="submit" className="Loginbtn">
                  <span className="textbtn"> Log in </span>
                  <AiOutlineRight className="rightIcon" />
                </button>
              </div>
            </form>
          </div>
          <div className="forgetPassword">
            <p>Forgot Your Password?</p>
            <p>Don't Have an account? Sing Up with FXPRIMUS now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
