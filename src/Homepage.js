import React, { Component } from "react";
import WorkLogo1 from "./images/country-road-logo.jpg";
import WorkLogo2 from "./images/typsy-logo.png";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <div className="homepage__header">
          <h1 className="mb-5">Fouad Chamma</h1>
          <p>Front-end developer</p>
          <p>Problem solver</p>
          <p>Passionate about tech</p>
        </div>
        <div className="container">
          <h2 className="homepage__h2 text-center">Work history</h2>
          <div className="row work-section">
            <div className="work-section__img col-md-4">
              <img src={WorkLogo2} alt="" />
            </div>
            <div className="col-md-8">
              <p>I worked at Typsy</p>
            </div>
          </div>
          <div className="row work-section">
            <div className="work-section__img col-md-4">
              <img src={WorkLogo1} alt="" />
            </div>
            <div className="col-md-8">
              <p>I worked at country road</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
