import React from "react";
import Header from "./components/Header";
import Item from "./components/Item";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Header />
        <div className="Items-grid">
          <Item></Item>
        </div>
      </div>
    );
  }
}

export default App;