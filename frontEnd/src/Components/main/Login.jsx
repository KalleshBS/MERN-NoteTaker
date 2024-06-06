import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllApi from "../../api/AllApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [passToggle, setPassToggle] = useState(false);

  const email = useRef("");
  const password = useRef("");

  const navigate = useNavigate();

  const formClear = () => {
    email.current.value = "";
    password.current.value = ""
  };

  async function showDetails(e) {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    try {
      const fdata = {
        email: email.current.value,
        password: password.current.value,
      }

      const dataResponse = await fetch(AllApi.login.url, {
        method: AllApi.login.method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(fdata),
      });

      const data = await dataResponse.json();
      console.log(data.message);
      console.log(typeof data.success, data.success);
      // console.log(JSON.parse(JSON.stringify(data)));
      if (data.success) {
        console.log("kjh");
        formClear();
        toast.success(data.message, {
          position: "top-left",
          autoClose: 2000,
          onClose: () => navigate("/user/home"), // navigate after toast is closed
        });
      } else {
        console.log("kh");
        toast.error(data.message, { position: "top-left" });
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while logging In", { position: "top-left" });
    }

  }

  return (
    <div className="cont-login">
      <form className="form" onSubmit={showDetails}>
        <h1>Login</h1>
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
        <Link to="/forgot-password" className="fpwd">
          Forgot Password?
        </Link>
        <button type="submit">Login</button>
        <Link to="/register">Don't have account? Register</Link>
      </form>
    </div>
  );
}
