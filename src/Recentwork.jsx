import React from "react";
import "./Recentwork.css";
import akrialogo from "./Images/akria.png";
import opentext from "./Images/opentext.png";
import cigna from "./Images/cigna.png";

function Recentwork() {
  return (
    <React.Fragment>
      <div className="container text-center" style={{ marginTop: "30px" }}>
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
                    width: "200px",
                    height: "100px",
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={akrialogo}
                  alt="AkriaLogo"
                  style={{
                    width: "200px",
                    height: "80px",
                    pointerEvents: "none",
                  }}
                />
                <img
                  src={cigna}
                  alt="CignaLogo"
                  style={{
                    width: "180px",
                    height: "80px",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ margin: "40px" }}>
        <h4 style={{ fontSize: "28px" }}>Interested to Hire me:</h4>
        <p style={{ fontSize: "20px" }} className="mt-3">
          <i
            class="bi bi-shuffle"
            style={{ marginRight: "5px", color: "#6e07f3" }}
          ></i>
          I’m always open to discussing product design & Development work.
        </p>
        <a
          href="https://www.linkedin.com/in/rajashekar-reddy-chinthala/"
          target="_blank"
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          <i class="bi bi-linkedin" style={{ marginRight: "5px" }}></i>
          Linkedin
        </a>
      </div>
    </React.Fragment>
  );
}

export default Recentwork;
