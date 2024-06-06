import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ToastSuccess from "../Toast1/ToastSuccess";
import { RemoveSuccessToast } from "../../contexts/RemoveSuccessToast";

export default function ForgotPwdOTP({ rmST }) {
  const [pwdMatch, setPwdMatch] = useState(true);

  const [mailSent, setMailSent] = useContext(RemoveSuccessToast);

  const otp = useRef("");
  const originalOtp = 123;

  function showDetails(e) {
    e.preventDefault();
    if (originalOtp === parseInt(otp.current.value)) {
      console.log(otp.current.value);
      setMailSent((p) => !p);
    } else {
      setTimeout(() => {
        setPwdMatch((p) => !p);
        setTimeout(() => {
          setPwdMatch((p) => !p);
        }, 3000);
      }, 500);
    }
  }
  return (
    <>
      <section className="cont-forgotpwdotp">
        <div className="toast-container">
          {mailSent && <ToastSuccess rmST={[mailSent, setMailSent]} />}
        </div>
        <form className="form" onSubmit={showDetails}>
          <h1>OTP</h1>
          <label htmlFor="#inp1">
            <input
              type="text"
              id="inp1"
              placeholder="Enter OTP"
              required
              ref={otp}
              className={`${pwdMatch ? "" : "pwd-inp-wrong"}`}
            />
          </label>
          <h5
            style={{ padding: "10px", color: "red", display: "none" }}
            className={`${pwdMatch ? "" : "show"}`}
          >
            OTP did'nt match
          </h5>
          <button type="submit">Submit</button>
          <Link to="/forgot-password">Did'nt get OTP? Resend</Link>
        </form>
      </section>
    </>
  );
}
