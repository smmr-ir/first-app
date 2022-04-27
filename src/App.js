import React, { Component } from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Cards from "./component/Cards";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Cards />
      </div>
    );
  }
}

export default App;

//rcc = class component create
//rsc = functional component create
