import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const email = useRef("");

  function showDetails(e) {
    e.preventDefault();
    console.log(email.current.value);
  }
  return (
    <>
      <section className="cont-foorgotpwd">
        <form className="form" onSubmit={showDetails}>
          <h1>Forgot Password</h1>
          <label htmlFor="#inp1">
            <input
              type="email"
              id="inp1"
              placeholder="Enter Email id"
              required
              ref={email}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
