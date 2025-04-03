import React from "react";
import Header from './Header.js';
import Footer from './Footer.js'

class About extends React.Component {
  render() {
    return(
      <div className="About">
        <Header />
        <div className='aboutContent'>
          <h1>Fake shop</h1>
          <h2>My first pet project. Here's some info about how does it work</h2>
          <h3>Fake shop is a project represents the work of the real online shop. Here's some technologies that were used in it.</h3>
          <ul>
            <li>html5</li>
            <li>css5</li>
            <li>js</li>
            <li>git & github</li>
            <li>node js & npm</li>
          </ul>
          <p>You can download this project on the github <a href="https://github.com/zaZZa564/fake-store">page</a></p>
        </div>
        <Footer />
      </div>
    );
  }
}


export default About