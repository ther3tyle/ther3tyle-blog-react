import React from "react";
import "./Navigation.scss";

const Navigation = (props) => {

  const navItemsBuild = props.navItems.map(item => {
    return <li className="nav-item" key={item}><a href="/">{item}</a></li>
  });

  return (
    <nav className="nav">
      <div className="logo"/>
      <div className="spacer"/>
      <ul className="nav-items">
        {navItemsBuild}
      </ul>
    </nav>
  )
}

export default Navigation;