import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import classes from "./BackdropMenu.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const BackdropMenu = (props) => {

  const attachedClasses = [classes.BackdropMenu];
  props.open ? attachedClasses.push(classes.Open) : attachedClasses.push(classes.Close);

  return (
    <Aux>
      <div className={attachedClasses.join(' ')}>
        <Backdrop show={props.open} clicked={props.closed} />
      </div>
    </Aux>
  )
}

export default BackdropMenu;