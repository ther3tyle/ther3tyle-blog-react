import React from "react";
import "./Layout.scss";
import Navigation from "../Navigation/Navigation";
import BackgroundImages from "../BackgroundImages/BackgroundImages";

const Layout = (props) => {

  const navItems = ['Blog', 'Sound', 'Portfolio', 'CV'];

  return (
    <div className="layout">
      <div className="container">

        <header>
          <Navigation navItems={navItems}/>
        </header>

        <main>
          <BackgroundImages />
        </main>

        {/*  */}
      </div>
    </div>
  );
}

export default Layout;