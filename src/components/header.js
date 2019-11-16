import React, { Component } from "react";
import LogoIMG from "../../public/images/logito.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <div className="logo">
          <img src={LogoIMG} alt="" />
        </div>
        <div className="navigation">
          <nav></nav>
        </div>
      </header>
    );
  }
}
export default Header;
