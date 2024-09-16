import React from "react";
import "./Component.css";
import desk from "../assets/desk.png"

const Component = () => {
  return (
    <div className="container">
      <div className="left">
        <div>
          <h2>React Projects</h2>
          <p>
            Get a variety of practical applications and hands on experience with
            this guide to React projects.
          </p>
        </div>
      </div>
      <div className="right">   
        <img src={desk} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Component;
