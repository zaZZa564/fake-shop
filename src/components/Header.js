import React from "react";
import reactRouter, { Router } from 'react-router-dom';
import logo from '../img/logo.svg';
import cart from '../img/cart.svg';

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
          <div className="header-content about">
            about us
          </div>
        </div>
        <div className="headerEl cart">
          <img src={cart} alt="cart" className="header-content"></img>
          <div className="header-content cart-content">
            cart
          </div>
        </div>
      </header>
    );
  }
}

export default Header;