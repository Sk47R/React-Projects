import React from "react";
import Testimonial from "./components/Testimonial";
import "./App.css";

const App = () => {
  return (
    <section className="testimonial">
      <div className="testimonial_div">
        <div className="testimonial__header">
          <h1>Happy Clients</h1>
          <Testimonial />
        </div>
      </div>
    </section>
  );
};

export default App;
