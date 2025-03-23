import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Product  id='1'/>
        <Product  id='2'/>
      </div>
    );
  }
}

export default App;