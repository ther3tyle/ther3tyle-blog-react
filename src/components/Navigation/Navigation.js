import React from "react";
import "./Navigation.scss";
import BackdropToggle from "./BackdropMenu/BackdropToggle/BackdropToggle";
import NavigationItems from "./NavigationItems/NavigationItems";
import Aux from "../../hoc/Aux/Aux";

const Navigation = (props) => {

    return (
        <Aux>
            <div className="menu-wrapper">
                <figure className="logo-link"/>
                {/* DEFAULT NAV MENU */}
                <nav className="desktop-nav">
                    <NavigationItems/>
                </nav>
                <div className="toggle-button-container">
                    <BackdropToggle clicked={props.toggleMenu}/>
                </div>
            </div>
        </Aux>
    )
}

export default Navigation;