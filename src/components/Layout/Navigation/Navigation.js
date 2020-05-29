import React from "react";
import "./Navigation.scss";
import BackdropToggle from "./BackdropMenu/BackdropToggle/BackdropToggle";
import NavigationItems from "./NavigationItems/NavigationItems";
import Aux from "../../../hoc/Aux/Aux";
import LogoButton from "../../UI/LogoButton/LogoButton";

const Navigation = () => {

    return (
        <Aux>
            <div className="menu-wrapper">
                <LogoButton link="/"/>
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

export default Navigation;