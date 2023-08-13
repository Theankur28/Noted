import React from "react";
import Main from "./Main";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";
import Logout from "./Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Main} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/logout" Component={Logout} />
        <Route exact path="/signup" Component={Signup} />
        <Route exact path="/forgotpass" Component={ForgotPassword} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
