import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function ResetPwd() {
  const [passToggle, setPassToggle] = useState(false);
  const [confirmPassToggle, setConfirmPassToggle] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(true);

  const email = useRef("");
  const password = useRef("");
  const confirmPwd = useRef("");

  function showDetails(e) {
    e.preventDefault();
    console.log(pwdMatch);
    if (password.current.value === confirmPwd.current.value) {
      console.log(email.current.value);
      console.log(password.current.value);
      console.log(confirmPwd.current.value);
    } else {
      // setPwdMatch((p) => !p);
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
      <section className="cont-resetpwd">
        <form className="form" onSubmit={showDetails}>
          <h1>Reset Password</h1>
          <label htmlFor="#inp1">
            <input
              type="email"
              id="inp1"
              placeholder="Enter Email id"
              required
              ref={email}
            />
          </label>
          <label htmlFor="#inp4" className="entpass">
            <input
              type={passToggle ? "text" : "password"}
              id="inp4"
              placeholder="Enter Password"
              required
              ref={password}
            />
            <span
              className="ic1"
              onClick={() => {
                setPassToggle((pre) => !pre);
              }}
            >
              {passToggle ? <FaEyeSlash /> : <FaEye />}
            </span>
          </label>
          <label htmlFor="#inp5">
            <input
              type={confirmPassToggle ? "text" : "password"}
              id="inp5"
              placeholder="Confirm Password"
              required
              ref={confirmPwd}
              className={`${pwdMatch ? "" : "pwd-inp-wrong"}`}
            />
            <span
              className="ic2"
              onClick={() => {
                setConfirmPassToggle((pre) => !pre);
              }}
            >
              {confirmPassToggle ? <FaEyeSlash /> : <FaEye />}
            </span>
            <h5
              style={{ padding: "10px", color: "red", display: "none" }}
              className={`${pwdMatch ? "" : "show"}`}
            >
              password did'nt match
            </h5>
          </label>
          <button type="submit">Reset</button>
        </form>
      </section>
    </>
  );
}
