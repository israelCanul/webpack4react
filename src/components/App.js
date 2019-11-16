import React, { Component } from "react";
import Header from "./header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Tempcontainer">
        <Header />
        <div className="main"></div>
        <footer></footer>
      </div>
    );
  }
}
export default App;
