import React from "react";
import logo from '../img/logo.svg';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="headerEl logo">
          <img src={logo} alt="logo" className="logo-svg"></img>
          <div className="logo-placeholder">logo</div>
        </div>
        <input placeholder="search" className="headerEl search"></input>
        <div className="headerEl about">about us</div>
        <div className="headerEl sing-in">sing in</div>
      </header>
    );
  }
}

export default Header;