import React from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import Login from "../Components/main/Login";
import RFooter1 from "../Components/RFooter/RFooter1";
import "../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Plogin() {
  return (
    <>
      <ToastContainer />
      <RHeader1 />
      <div className="app">
        <Login />
        <RFooter1 />
      </div>
    </>
  );
}
