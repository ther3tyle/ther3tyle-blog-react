import React from "react";
import "./LogoButton.scss";
import {Link} from "react-router-dom";

const LogoButton = (props) => {
    return (
        <div className="logo-button-container">
            <Link to={props.link}>
                <figure className="logo-button"/>
            </Link>
        </div>
    )
}

export default LogoButton