import React from "react";
import {connect} from "react-redux";

import {closeBackdrop} from "../../../../redux/actions";
import Aux from "../../../../hoc/Aux/Aux";
import Backdrop from "../../../UI/Backdrop/Backdrop";

const BackdropMenu = (props) => {
  return (
    <Aux>
      <Backdrop show={props.showBackdrop} click={props.closeBackdrop} />
      <nav className="backdrop-nav"/>
    </Aux>
  )
}

const mapStateToProps = (state) => {
    return {
        showBackdrop: state.backdropMenu.showBackdrop
    }
}

export default connect(mapStateToProps, {closeBackdrop})(BackdropMenu);