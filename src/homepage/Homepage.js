import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./Homepage.css";
import avatar from "../Images/avatar.png";
import devices from "../Images/devices.svg";
import Intro from "../Intro";
import Recentwork from "../Recentwork";
import merryChristimas from "../Images/christimas.webp";
import thanksGiving from "../Images/thanksGiving.jpg";

function Homepage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowPopup(false);
  return (
    <React.Fragment>
      <Modal show={showPopup} onHide={handleClose}>
        <Modal.Body>
          <div className="text-center">
            <img src={thanksGiving} style={{ width: "450px" }} />
          </div>
          <div className="text-center mt-3">
            <img
              src={merryChristimas}
              style={{ width: "450px", height: "300px" }}
            />
          </div>
        </Modal.Body>
      </Modal>
      <div className="container text-center full_page_text">
        <h2
          style={{
            fontSize: "35px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="mt-4"
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
        <img
          src={avatar}
          className="avatar_logo"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div className="container text-center mt-3">
        <img
          src={devices}
          className="devices_logo"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <Intro />
      <Recentwork />
    </React.Fragment>
  );
}

export default Homepage;
