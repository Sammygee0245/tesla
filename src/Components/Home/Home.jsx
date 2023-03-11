import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-div">
      <div
        style={{
          backgroundImage: `url("pics/firstpage.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hpage1 one"
      >
        <p className="sfer">Solar for Existing Roofs</p>
        <div className="icns">
          <div className="ste">
            <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
            <h4>Convert Sunlight</h4>
            <h5>to Energy</h5>
          </div>

          <div className="ste">
            <FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>
            <h4>Guaranteed Lowest</h4>
            <h5>for Solar</h5>
          </div>

          <div className="ste">
            <h3>24/7</h3>
            <h4>Energy</h4>
            <h5>Monitoring</h5>
          </div>

          <div className="ste">
            <button className="orderbtn">Order Now</button>
          </div>
        </div>
      </div>
      <div className="hpage1">p2</div>
      <div className="hpage1">p3</div>
      <div className="hpage1">p4</div>
      <div className="hpage1">p5</div>
      <div className="hpage1">p6</div>
      <div className="hpage1">p7</div>
    </div>
  );
}

export default Home;
