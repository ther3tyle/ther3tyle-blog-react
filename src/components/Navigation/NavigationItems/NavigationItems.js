import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import "./NavigationItems.scss";

const NavigationItems = (props) => {

  const items = ['Blog', 'Sound', 'Portfolio', 'CV'].map((item, _) => {
    return (
      <NavigationItem key={item} name={item} link={item.toLowerCase()}/>
    );
  });

  return (
    <ul className="navigation-items">
      {items}
    </ul>
  );

}

export default NavigationItems;