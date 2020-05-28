import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const BackdropMenu = (props) => {

  let menuString = "backdrop-menu";
  props.open ? menuString += " open" : menuString += " closed"

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.click}/>
      <div className={menuString}>
        <nav className="backdrop-nav"/>
      </div>
    </Aux>
  )
}

export default BackdropMenu;