import React from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import ForgotPassword from "../Components/main/ForgotPassword";
import RFooter1 from "../Components/RFooter/RFooter1";

export default function PForgotPassword() {
  return (
    <>
      <RHeader1 />
      <div className="app">
        <ForgotPassword />
        <RFooter1 />
      </div>
    </>
  );
}
