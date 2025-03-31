import React from "react";

// components
import Header from "./components/Header";
import Product from "./components/Product";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <div className="product-grid">
          <Product  id='1'/>
          <Product  id='2'/>
          <Product  id='3'/>
          <Product  id='4'/>
          <Product  id='5'/>
          <Product  id='6'/>
          <Product  id='7'/>
          <Product  id='8'/>
          <Product  id='9'/>
          <Product  id='10'/>
          <Product  id='11'/>
          <Product  id='12'/>
          <Product  id='13'/>
          <Product  id='14'/>
          <Product  id='15'/>
          <Product  id='16'/>
          <Product  id='17'/>
          <Product  id='18'/>
          <Product  id='19'/>
          <Product  id='20'/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;