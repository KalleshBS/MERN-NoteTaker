import React from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import Register from "../Components/main/Register";
import RFooter1 from "../Components/RFooter/RFooter1";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Pregister() {
  return (
    <>
      <ToastContainer />
      <RHeader1 />
      <div className="app">
        <Register />
        <RFooter1 />
      </div>
    </>
  );
}
