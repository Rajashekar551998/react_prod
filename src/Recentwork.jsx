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
          <div
            className="card"
            style={{
              width: "25rem",
              padding: "17px",
              border: "1px solid #6e07f3",
            }}
          >
            <div className="card-body">
              <h5 className="card-title">Akria Technologies LLC</h5>
              <img
                src={akrialogo}
                alt="AkriaLogo"
                style={{ width: "80%", height: "65%", pointerEvents: "none" }}
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
      <div className="container" style={{ margin: "40px" }}>
        <h4 style={{ fontSize: "28px" }}>Interested to Hire me:</h4>
        <p style={{ fontSize: "20px" }} className="mt-3">
          <i
            class="bi bi-shuffle"
            style={{ marginRight: "5px", color: "#6e07f3" }}
          ></i>
          I’m always open to discussing product design & Development work.
        </p>
        <button className="start_con mt-3">
          <i class="bi bi-chat-left-dots" style={{ marginRight: "5px" }}></i>
          Start Conversation
        </button>
      </div>
    </React.Fragment>
  );
}

export default Recentwork;
