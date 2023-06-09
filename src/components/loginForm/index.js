import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    Login(details);
    // Perform login logic here
    // console.log("Username:", username);
    // console.log("Password:", password);

    // Reset the form
    // setUsername("");
    // setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          {/* ERROR!*/}
          <div className="form-group">
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
          </div>
        </div>
        <div>
          <input type={"submit"} value="LOGIN" />
          <AiOutlineRight className="rightIcon" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
