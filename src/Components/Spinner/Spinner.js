import React from "react";
import "./Spinner.css";

const Spinner = ({ darkMode }) => {
  return (
    <div className={"root " + (darkMode === true ? "darkMode" : "")}>
      <div className="pulse">{"<A />"}</div>
    </div>
  );
};

export default Spinner;
