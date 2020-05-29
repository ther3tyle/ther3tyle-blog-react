import React from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const BackdropMenu = (props) => {
  return (
    <Aux>
      {/*<Backdrop show={props.open} clicked={props.click}/>*/}
      <Backdrop />
      <nav className="backdrop-nav"/>
    </Aux>
  )
}

export default BackdropMenu;