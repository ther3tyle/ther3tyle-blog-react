import React from "react";
import "./Layout.scss";

const Layout = (props) => {

  const navItemsArr = ['Blog', 'Sound', 'CV'];

  const navItemsBuild = navItemsArr.map(item => {
    return <li className="nav-item" key={item}><a href="/">{item}</a></li>
  });

  return (
    <div className="layout">
      <div className="container">

        {/* NAV */}
        <header>
          <nav className="nav">
            <div className="logo"/>
            <div className="spacer"/>
            <ul className="nav-items">
              {navItemsBuild}
            </ul>
          </nav>
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