import React from "react";
import '../style/footer.css'

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="footerEl about">about us</div>
        <div className="footerEl info">some important info</div>
        <div className="footerEl phone">+7 (351) 240-04-40</div>
      </footer>
    );
  }
}

export default Footer;