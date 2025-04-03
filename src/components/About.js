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
          <h1 className="fakeShopH1">Fake shop</h1>
          <h2>pet project that represents how does real online shop works</h2>

          <h1>activities</h1>
          <h2>Here you can add things to cart, choose amount and create order. Then you have to wait some time and your order will be delivered. Also you can check rate and reviews of the product and search by the key words</h2>

          <h1>Big stack of techologies</h1>
          <h2 className="stackH2">in this project I used such technologies as</h2>
          <ul>
            <li>html5</li>
            <li>css5</li>
            <li>react js</li>
            <li>node js</li>
            <li>npm</li>
            <li>git & github</li>
          </ul>

          <h1>Download</h1>
          <h2>To run this project on your desktop you can visit out <a href="https://github.com/zaZZa564/fake-store">page</a></h2>

          <p>all data has been taken from the <a href="https://fakestoreapi.com/">fakestore api</a></p>
        </div>
        <Footer />
      </div>
    );
  }
}


export default About