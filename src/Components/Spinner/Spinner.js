import React from "react";
import "./Spinner.css";

const Spinner = ({ darkMode }) => {
  return (
    <div className={"root " + (darkMode === true ? "darkMode" : "")}>
      <h1 className="glitch">
        <span aria-hidden="true">{"<A />"}</span>
        {"<A />"}
        <span aria-hidden="true">{"<A />"}</span>
      </h1>
    </div>
  );
};

export default Spinner;
