import React from "react";
import RHeader1 from "../Components/RHeaders/RHeader1";
import Lindex from "../Components/main/Lindex";
import RFooter1 from "../Components/RFooter/RFooter1";

import "../App.css";

export default function Index() {
  return (
    <>
      <RHeader1 />
      <div className="app">
        <Lindex />
        <RFooter1 />
      </div>
    </>
  );
}
