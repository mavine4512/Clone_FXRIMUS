import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login";
import Register from "../../pages/register";
import { appPagesRoutes } from "../../constants/appPagesRoutes";

function RoutesApp() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path={appPagesRoutes.Login} element={<Login />} />
          <Route exact path={appPagesRoutes.Register} element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default RoutesApp;
