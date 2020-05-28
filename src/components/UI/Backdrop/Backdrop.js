import React from "react";

import './Backdrop.scss';
import NavigationItems from "../../Layout/Navigation/NavigationItems/NavigationItems";

const Backdrop = (props) => {

  const openCloseStr = props.show ? " open" : " close";

  return (
    <div className={"backdrop" + openCloseStr}
         onClick={props.clicked}>
      <NavigationItems/>
    </div>
  );
};

export default Backdrop;