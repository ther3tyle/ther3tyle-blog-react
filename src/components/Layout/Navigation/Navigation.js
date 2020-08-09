import React from "react";
import {connect} from "react-redux";
import {changeBgColor, changeTextColor} from "../../../redux/actions";

import "./Navigation.scss";
import BackdropToggle from "./BackdropMenu/BackdropToggle/BackdropToggle";
import NavigationItems from "./NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux/Aux";
import LogoButton from "../../UI/LogoButton/LogoButton";

const Navigation = (props) => {
    const logoClickHandler = () => {
        props.changeBgColor("#3177e6");
        props.changeTextColor("#ffffff");
    }

    return (
        <Aux>
            <div className="menu-wrapper">
                <LogoButton link="/" handleLogoClick={logoClickHandler} color={props.color}/>
                {/* DEFAULT NAV MENU */}
                <nav className="desktop-nav">
                    <NavigationItems/>
                </nav>
                <div className="toggle-button-container">
                    <BackdropToggle/>
                </div>
            </div>
        </Aux>
    )
}

const mapStateToProps = (state) => {
    return {
        changeBgColor: state.changeBgColor,
        changeTextColor: state.changeTextColor,
        color: state.colors.text
    }
}

export default connect(mapStateToProps, {changeBgColor, changeTextColor})(Navigation);