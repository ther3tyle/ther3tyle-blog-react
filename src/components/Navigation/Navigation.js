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
        <BackdropToggle clicked={props.toggleMenu}/>
      </div>
    </Aux>
  )
}

export default Navigation;