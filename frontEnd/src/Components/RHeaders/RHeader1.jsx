import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function RHeader1() {
  const loc = window.location.pathname;
  const loc1 = ["/user/home"];
  // alert( window.innerHeight);
  return (
    <div className="RHeader1">
      <h1>NoteTaker</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {loc1.includes(loc) ? (
          <>
            <li>
              <Link to="">Add Note</Link>
            </li>
            <li>
              <Link to="">Show Notes</Link>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
      {loc1.includes(loc) ? (
        <div className="searchbox">
          <input type="text" placeholder="Enter Here to Search" />
          <button>Search</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
