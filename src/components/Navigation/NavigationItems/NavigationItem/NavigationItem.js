import React from "react";
import "./NavigationItem.scss";

const NavigationItem = (props) => {
  return (
    <li className="navigation-item">
      <a className={props.active ? "active" : null} href={props.link}>{props.name}</a>
    </li>
  );
}

export default NavigationItem;