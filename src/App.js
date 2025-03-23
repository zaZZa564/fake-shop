import React from "react";
import Header from "./components/Header";
import Product from "./components/Product";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Product />
      </div>
    );
  }
}

export default App;