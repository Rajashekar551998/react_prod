import React from "react";
import "./Homepage.css";
import avatar from "../Images/avatar.png";
import devices from "../Images/devices.svg";
import Intro from "../Intro";

function Homepage() {
  return (
    <React.Fragment>
      <div className="container text-center">
        <h2
          style={{
            fontSize: "40px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="mt-5"
        >
          UI & Front End Developer
        </h2>
        <h4
          className="myName"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          I design and code beautifully simple things, and I love what I do.
        </h4>
      </div>
      <div className="container text-center mt-5">
        <img src={avatar} className="avatar_logo" />
      </div>
      <div className="container text-center mt-5">
        <img src={devices} className="devices_logo" />
      </div>
      <Intro />
    </React.Fragment>
  );
}

export default Homepage;
