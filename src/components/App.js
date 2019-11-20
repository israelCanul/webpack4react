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
        <div className="main">
          <div className="componente active">
            este es mi componente jejej XD
          </div>
        </div>
        <footer>este es mi footer</footer>
      </div>
    );
  }
}
export default App;
