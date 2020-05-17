import React, {useState} from "react";
import "./Layout.scss";
import Navigation from "../Navigation/Navigation";
import BackdropMenu from "../Navigation/BackdropMenu/BackdropMenu";

const Layout = (props) => {

  const [showMenu, setShowMenu] = useState(false);

  const closeMenuHandler = () => {
    setShowMenu(false);
  }

  const showMenuHandler = () => {
    setShowMenu(prevState => !prevState);
    console.log(showMenu)
  }


  return (
    <div className="layout">
      <div className="container">

        <header>
          {/* BACKDROP MENU */}
          <Navigation toggleMenu={showMenuHandler}/>
        </header>
        <BackdropMenu open={showMenu} click={closeMenuHandler}/>
        <main>
          {props.children}
        </main>
      </div>
    </div>
  );
}

export default Layout;