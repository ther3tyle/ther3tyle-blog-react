import React from "react";
import "./Layout.scss";

import Navigation from "../Navbar/Navigation";

const Layout = (props) => {

  const navItems = ['Blog', 'Sound', 'CV'];

  return (
    <div className="layout">
      <div className="container">

        <header>
          <Navigation navItems={navItems}/>
        </header>

        <main>
          <div className="background-images">
            <div className="background-image-text">
              <div className="background-image-arrow"/>
            </div>
            <div className="background-align-right">
              <div className="background-image-doggy"/>
            </div>
          </div>
        </main>
        {/*  */}

      </div>
    </div>
  );
}

export default Layout;