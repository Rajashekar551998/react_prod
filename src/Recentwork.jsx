import React from "react";
import "./Recentwork.css";
import akrialogo from "./Images/akria.png";
import opentext from "./Images/opentext.png";
import cigna from "./Images/cigna.png";

function Recentwork() {
  const openGithub = () => {
    window.open("https://github.com/Rajashekar551998", "_blank");
  };
  return (
    <React.Fragment>
      <div
        className="container-fluid text-center mb-5 mt-5"
        style={{ marginTop: "30px" }}
      >
        <p style={{ fontSize: "30px" }}>Connect with me</p>
      </div>
      <div className="container-fluid text-center">
        <div className="row">
          <div className="col-md-12">
            <button
              style={{
                width: "150px",
                border: "1px solid #6e07f3",
                padding: "10px",
                borderRadius: "10px",
                color: "#6e07f3",
                backgroundColor: "white",
              }}
            >
              <i
                class="bi bi-envelope-paper-fill"
                style={{ marginRight: "5px", color: "#6e07f3" }}
              ></i>
              Email
            </button>
            <button
              style={{
                width: "150px",
                border: "1px solid #6e07f3",
                padding: "10px",
                borderRadius: "10px",
                color: "#6e07f3",
                backgroundColor: "white",
                marginLeft: "10px",
              }}
            >
              <i
                class="bi bi-linkedin"
                style={{ marginRight: "5px", color: "#6e07f3" }}
              ></i>
              Linkedin
            </button>
            <button
              style={{
                width: "150px",
                border: "1px solid #6e07f3",
                padding: "10px",
                borderRadius: "10px",
                color: "#6e07f3",
                backgroundColor: "white",
                marginLeft: "10px",
              }}
              onClick={openGithub()}
            >
              <i
                class="bi bi-github"
                style={{ marginRight: "5px", color: "#6e07f3" }}
              ></i>
              Github
            </button>
          </div>
        </div>
      </div>
      <div
        className="container text-center mb-5 mt-5"
        style={{ marginTop: "30px" }}
      >
        <p style={{ fontSize: "30px" }}>My Work Experiences</p>
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
        <h6>Almost 2 Years of Work Experience.</h6>
        <div className="container d-flex justify-content-center mt-2">
          <div className="row">
            <div className="col-md-12">
              <div className="card-body">
                <div>
                  <img
                    src={opentext}
                    alt="OpentextLogo"
                    style={{
                      width: "150px",
                      height: "90px",
                      pointerEvents: "none",
                    }}
                  />
                  <p>Internship (2019 - 2020) 6-Months</p>
                  <br />
                </div>
                <div>
                  <img
                    src={akrialogo}
                    alt="AkriaLogo"
                    style={{
                      width: "150px",
                      height: "60px",
                      pointerEvents: "none",
                    }}
                  />
                  <br />
                  <p>Internship (2021 - 2021) 6-Months</p>
                </div>
                <div>
                  <img
                    className="mt-2"
                    src={cigna}
                    alt="CignaLogo"
                    style={{
                      width: "130px",
                      height: "60px",
                      pointerEvents: "none",
                    }}
                  />
                  <p className="mt-2">Internship (2023 - 2023) 8-Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Recentwork;
