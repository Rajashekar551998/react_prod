import React from "react";
import "./Recentwork.css";
import akrialogo from "./Images/akria.png";

function Recentwork() {
  const viewwebsite = () => {
    window.open("https://www.akriatech.com/", "_blank");
  };

  return (
    <React.Fragment>
      <div className="container text-center" style={{ margin: "50px" }}>
        <h4 style={{ fontSize: "30px" }}>My Recent Works</h4>
        <p style={{ fontSize: "18px" }}>
          Here are a few past design projects I've worked on. Want to see more?
          <a href="#" style={{ textDecoration: "none", marginLeft: "5px" }}>
            Email me.
          </a>
        </p>
        <div className="container d-flex justify-content-center mt-5">
          <div className="card" style={{ width: "25rem", padding: "20px" }}>
            <div className="card-body">
              <h5 className="card-title">Akria Technologies LLC</h5>
              <img
                src={akrialogo}
                alt="AkriaLogo"
                style={{ width: "80%", height: "80%", pointerEvents: "none" }}
              />
            </div>
            <div className="text-center">
              <button className="view_website" onClick={viewwebsite}>
                View Website
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Recentwork;
