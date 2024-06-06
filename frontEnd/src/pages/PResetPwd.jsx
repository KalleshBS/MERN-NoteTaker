import React from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import ResetPwd from "../Components/main/ResetPwd";
import RFooter1 from "../Components/RFooter/RFooter1";

export default function PResetPwd() {
  return (
    <>
      <RHeader1 />
      <div className="app">
        <ResetPwd />
        <RFooter1 />
      </div>
    </>
  );
}
