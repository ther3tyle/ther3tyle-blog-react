import React from "react";
import "./BackdropToggle.scss";
import { connect } from 'react-redux';
import {openBackdrop} from "../../../../../redux/actions";

const BackdropToggle = (props) => (
  <div onClick={props.openBackdropMenu} className="backdrop-toggle">
    {/* Three lines for toggle button */}
    <div style={{background:props.color}}/>
    <div style={{background:props.color}}/>
    <div style={{background:props.color}}/>
  </div>
);

const mapStateToProps = (state) => {
    return {
        color: state.colors.text
    }
}

export default connect(mapStateToProps, {openBackdropMenu: openBackdrop})(BackdropToggle);
