import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Plogin from "../pages/Plogin";
import Pregister from "../pages/Pregister";
import Error404 from "../pages/Error404";
import PForgotPassword from "../pages/PForgotPassword";
import PForgotPwdOTP from "../pages/PForgotPwdOTP";
import ResetPwd from "../Components/main/ResetPwd";
import PResetPwd from "../pages/PResetPwd";
import PUserHome from "../pages/user/PUserHome";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Croutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/login" element={<Plogin />}></Route>
          <Route path="/register" element={<Pregister />}></Route>
          <Route path="/forgot-password" element={<PForgotPassword />}></Route>
          <Route path="/pwd-otp" element={<PForgotPwdOTP />}></Route>
          <Route path="/reset-pwd" element={<PResetPwd />}></Route>
          <Route path="/user" element={<ProtectedRoutes />}>
            <Route path="home" element={<PUserHome />}></Route>
          </Route>
          <Route path="/*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </>
  );
}
