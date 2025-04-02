import React from "react";
import '../style/footer.css'

class Footer extends React.Component {
  render() {
    return(
      <footer className="footer">
        <div className="footerEl footerAbout">
          <a href="http://localhost:3000/about/">
            about us
          </a>
        </div>
        <div className="footerEl info">
          some important info
        </div>
        <div className="footerEl phone">
          +7 (351) 240-04-40
        </div>
      </footer>
    );
  }
}

export default Footer;