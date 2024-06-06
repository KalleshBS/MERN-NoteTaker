import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AllApi from "../../api/AllApi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [passToggle, setPassToggle] = useState(false);
  const [confirmPassToggle, setConfirmPassToggle] = useState(false);
  const [pwdMatch, setPwdMatch] = useState(true);

  const fullname = useRef("");
  const email = useRef("");
  const mobile = useRef("");
  const password = useRef("");
  const confirmPwd = useRef("");

  const navigate = useNavigate();

  const resetForm = () => {
    fullname.current.value = "";
    email.current.value = "";
    mobile.current.value = "";
    password.current.value = "";
    confirmPwd.current.value = "";
  };

  async function showDetails(e) {
    e.preventDefault();
    const fdata = {
      fullname: fullname.current.value,
      email: email.current.value,
      mobile: mobile.current.value,
      password: password.current.value,
    };
    console.log(fdata);
    console.log(JSON.stringify(fdata));
    if (password.current.value === confirmPwd.current.value) {
      // console.log(fullName.current.value);
      // console.log(email.current.value);
      // console.log(mobile.current.value);
      // console.log(password.current.value);

      try {
        const dataResponse = await fetch(AllApi.signup.url, {
          method: AllApi.signup.method,
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(fdata),
        });

        const data = await dataResponse.json();
        console.log(data);
        if (data.success) {
          resetForm();
          toast.success(data.message, {
            position: "top-left",
            autoClose: 2000,
            onClose: () => navigate("/login"), // navigate after toast is closed
          });
        } else {
          toast.error(data.message, { position: "top-left" });
          // resetForm();
        }
      } catch (error) {
        console.log(error);
      }
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
    <div className="cont-register">
      <form className="form" onSubmit={showDetails}>
        <h1>Register</h1>
        <label htmlFor="#inp1">
          <input
            type="text"
            id="inp1"
            placeholder="Enter Full-Name"
            required
            ref={fullname}
          />
        </label>
        <label htmlFor="#inp2">
          <input
            type="text"
            id="inp2"
            placeholder="Enter Email id"
            required
            ref={email}
          />
        </label>
        <label htmlFor="#inp3">
          <input
            type="text"
            id="inp3"
            placeholder="Enter Mobile Number"
            required
            ref={mobile}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
