import React from "react";
import "./Recentwork.css";
import akrialogo from "./Images/akria.png";
import opentext from "./Images/opentext.png";
import cigna from "./Images/cigna.png";

function Recentwork() {
  return (
    <React.Fragment>
      <div className="container text-center mb-5" style={{ marginTop: "30px" }}>
        <h4 style={{ fontSize: "30px" }}>My Work Experiences</h4>
        <p style={{ fontSize: "18px" }}>
          Here are a few past design projects I've worked on. Want to see more?
          <a
            href="mailto:contact@rajashekarch.com"
            style={{
              textDecoration: "none",
              marginLeft: "5px",
              color: "#6e07f3",
            }}
          >
            Email me.
          </a>
        </p>
        <div className="container d-flex justify-content-center mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <img
                  src={opentext}
                  alt="OpentextLogo"
                  style={{
                    width: "150px",
                    height: "100px",
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={akrialogo}
                  alt="AkriaLogo"
                  style={{
                    width: "150px",
                    height: "60px",
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={cigna}
                  alt="CignaLogo"
                  style={{
                    width: "130px",
                    height: "60px",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Recentwork;
