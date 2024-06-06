import React, { useState } from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import ForgotPwdOTP from "../Components/main/ForgotPwdOTP";
import RFooter1 from "../Components/RFooter/RFooter1";
import { RemoveSuccessToast } from "../contexts/RemoveSuccessToast";

export default function PForgotPwdOTP() {
  const [mailSent, setMailSent] = useState(false);

  return (
    <>
      <RHeader1 />
      <RemoveSuccessToast.Provider value={[mailSent, setMailSent]}>
        <div className="app">
          <ForgotPwdOTP rmST={[mailSent, setMailSent]} />
          <RFooter1 />
        </div>
      </RemoveSuccessToast.Provider>
    </>
  );
}
