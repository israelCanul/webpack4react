import React from "react";
import { render } from "react-dom";
import "../scss/app.scss";

/***Component */
import App from "./components/App";

HTMLElement.prototype.hasClass = function(cls) {
  return this.className.indexOf(cls) > -1;
};
HTMLElement.prototype.addClass = function(cls) {
  if (!this.hasClass(cls)) {
    this.className = (this.className + " " + cls).trim();
  }
};
HTMLElement.prototype.removeClass = function(cls) {
  var rExp = new RegExp("(" + cls + ")", "g");
  var ClassesResult = this.className.replace(rExp, "").trim();
  this.className = ClassesResult;
};

render(<App />, document.getElementById("app"));
