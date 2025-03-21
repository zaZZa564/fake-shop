import React from "react";
import logo from '../img/logo.svg';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="headerEl logo">
          <img src={logo} alt="logo" className="logo-svg header-content"></img>
          <div className="logo-placeholder header-content">logo</div>
        </div>
        <input placeholder="search" className="headerEl search"></input>
        <div className="headerEl">
          <div className="header-content about">about us</div>
        </div>
        <div className="headerEl sing-in">
          <div className="header-content">
            sing in
          </div>
        </div>
      </header>
    );
  }
}

export default Header;