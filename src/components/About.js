import React from "react";
import Header from './Header.js';
import Footer from './Footer.js'
import '../style/about.css';

class About extends React.Component {
  render() {
    return(
      <div className="About">
        <Header />
        <div className='aboutContent'>
          
        </div>
        <Footer />
      </div>
    );
  }
}


export default About