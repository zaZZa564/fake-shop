import React from "react";
import logo from '../img/logo.svg';
import cart from '../img/cart.svg';

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="headerEl logo">
          <a href="http://localhost:3000/">
            <img src={logo} alt="logo" className="logo-svg header-content"></img>
          </a>
          <a href="http://localhost:3000/">
            <div className="logo-placeholder header-content">
              logo
            </div>
          </a>
        </div>

        <input placeholder="search" className="headerEl search"></input>

        <div className="headerEl">
          <a href="http://localhost:3000/about/">
            <div className="header-content about">
              about us
            </div>
          </a>
        </div>
        
        <div className="headerEl cart">
          <a href="http://localhost:3000/cart/">
            <img src={cart} alt="cart" className="header-content"></img>
          </a>
          <a href="http://localhost:3000/cart/">
            <div className="header-content cart-content">
              cart
            </div>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;