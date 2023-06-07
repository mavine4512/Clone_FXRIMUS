import React, { useState } from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import "./style.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform login logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Reset the form
    setUsername("");
    setPassword("");
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
          <h1>Log in to client area</h1>
          <div className="loginFrom">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit" className="Loginbtn">
                Log in <AiOutlineRight className="rightIcon" />
              </button>
            </form>
          </div>

          <div>
            <p>Forgot Your Password?</p>
            <p>Don't Have an account? Sing Up with FXPRIMUS now!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
