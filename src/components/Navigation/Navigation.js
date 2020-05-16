import React, {useState} from "react";
import "./Navigation.scss";
import BackdropToggle from "./BackdropMenu/BackdropToggle/BackdropToggle";
import BackdropMenu from "./BackdropMenu/BackdropMenu";

const Navigation = (props) => {

  const [menuOpened, setMenuOpened] = useState(false);

  const navItemsBuild = props.navItems.map((item, _) => {
    return (
      <li
        className="nav-item"
        key={item}>
        <a href="/">{item}</a>
      </li>
    );
  });

  const handleToggleClicked = () => {
    setMenuOpened((prevState => !prevState));
  }

  return (
    <nav className="nav">
      <figure className="logo-link"/>
      <div className="spacer"/>
      {/* DEFAULT NAV MENU */}
      <div className="menu-wrapper">

        <ul className="nav-items">
          {navItemsBuild}
        </ul>
        {/* BACKDROP MENU */}
        <BackdropToggle clicked={handleToggleClicked}/>
        <BackdropMenu open={menuOpened} closed={handleToggleClicked}/>
      </div>
    </nav>
  )
}

export default Navigation;