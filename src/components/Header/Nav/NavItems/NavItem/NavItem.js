import React from "react";
import classes from './NavItem.module.css';

const NavItem = (props) => {
  return (
    <li onClick={props.clicked} className={classes.NavItem}>
      {props.children}
    </li>
  );
}

export default NavItem