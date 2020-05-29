import React from "react";
import "./BackdropToggle.scss";
import { connect } from 'react-redux';
import {openBackdropMenu} from "../../../../../actions";

const BackdropToggle = (props) => (
  <div onClick={props.openBackdropMenu} className="backdrop-toggle">
    {/* Three lines for toggle button */}
    <div/>
    <div/>
    <div/>
  </div>
);

export default connect(null, {openBackdropMenu})(BackdropToggle);