import React from "react";
import { Link } from "react-router-dom";

export default function Lindex() {
  return (
    <div className="cont-index">
      <img src="https://kallesh-b-s.github.io/project-img-ref/NoteTaker/notes.png" />
      <Link to="/login"><button>Start</button></Link>
    </div>
  );
}
