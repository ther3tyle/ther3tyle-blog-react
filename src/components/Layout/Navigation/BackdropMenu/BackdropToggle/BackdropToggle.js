import React from "react";
import "./BackdropToggle.scss";

const BackdropToggle = (props) => (
  <div onClick={props.clicked} className="backdrop-toggle">
    {/* Three lines for toggle button */}
    <div/>
    <div/>
    <div/>
  </div>
);

export default BackdropToggle;