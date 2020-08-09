import React from "react";
import "./LogoButton.css";
import {Link} from "react-router-dom";

const LogoButton = (props) => {
    return (
        <div className="logo-button-container" onClick={props.handleLogoClick}>
            <Link to={props.link}>
                <figure className="logo-button" style={{background: props.color}}/>
            </Link>
        </div>
    )
};

export default LogoButton
