import React from "react";
import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import "./style.css";
function login() {
  return (
    <div className="parentContainer">
      <div className="headContainer">
        <div className="logoImg">
          <img
            style={{
              height: 150,
              width: 150,
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
          form
        </div>
      </div>
    </div>
  );
}

export default login;
