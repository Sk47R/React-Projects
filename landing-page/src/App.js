import React from "react";
import "./App.css";
import { Navbar, Brand, CTA } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3></WhatGPT3>
      <Features />
      <Possibility />
      <CTA></CTA>
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
