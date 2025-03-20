import React from "react";

class Header extends React.Component {
  render() {
    return(
      <header className="header">
        <div className="headerEl logo">logo</div>
        <div className="headerEL search-container">
          <input placeholder="search" className="search"></input>
        </div>
        <div className="headerEl about">about us</div>
        <div className="headerEl sing-in">sing in</div>
      </header>
    );
  }
}

export default Header;