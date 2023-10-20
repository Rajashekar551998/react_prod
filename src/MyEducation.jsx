import React from "react";
import unt from "./Images/unt.svg";
import mrec from "./Images/mrec.png";

function MyEducation() {
  return (
    <React.Fragment>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12 mt-3">
            <p style={{ fontSize: "30px" }}>My Education</p>
            <div>
              <img
                src={unt}
                alt="unt_logo"
                style={{
                  width: "110px",
                  height: "80px",
                  pointerEvents: "none",
                }}
              />
              <p style={{ fontSize: "16px" }}>
                <i
                  class="bi bi-backpack3-fill"
                  style={{ marginRight: "5px", color: "#6e07f3" }}
                ></i>
                <b>Master's in Computer Science (Aug 2021 - Dec 2023)</b>
              </p>
            </div>
            <div>
              <img
                src={mrec}
                alt="unt_logo"
                style={{
                  width: "100px",
                  height: "90px",
                  pointerEvents: "none",
                }}
              />
              <p style={{ fontSize: "16px" }}>
                <i
                  class="bi bi-backpack3-fill"
                  style={{ marginRight: "5px", color: "#6e07f3" }}
                ></i>
                <b>
                  Bachelor's in Computer Science and Engineering (Aug 2016 - May
                  2020)
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyEducation;
