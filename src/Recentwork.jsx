import React from "react";
import "./Recentwork.css";
import akrialogo from "./Images/akria.png";
import opentext from "./Images/opentext.png";
import MyEducation from "./MyEducation";

function Recentwork() {
  const openGithub = () => {
    window.open("https://github.com/Rajashekar551998", "_blank");
  };

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/rajashekar-reddy-chinthala/",
      "_blank"
    );
  };
  const openEmail = () => {
    document.getElementById("openEmail").addEventListener("click", function () {
      var email = "vrr.chinthala@gmail.com";
      var mailtoLink = "mailto:" + email;
      window.location.href = mailtoLink;
    });
  };

  return (
    <React.Fragment>
      <div
        className="container-fluid text-center mt-5"
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
                marginLeft: "10px",
              }}
              onClick={openLinkedin}
              className="linked_button"
            >
              <i
                class="bi bi-linkedin"
                style={{ marginRight: "5px", color: "#6e07f3" }}
              ></i>
              Linkedin
            </button>
          </div>
        </div>
      </div>
      <MyEducation />
      <div
        className="card container text-center mb-5 mt-3"
        style={{
          marginTop: "30px",
          border: "1px solid #6e07f3",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
        }}
      >
        <p className="mt-3" style={{ fontSize: "30px" }}>
          My Work Experiences
        </p>
        <p style={{ fontSize: "18px" }}>
          Here are a few past design projects I've worked on.
        </p>
        <div className="container d-flex justify-content-center">
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
                  <p>Internship (Dec 2019 - Jun 2020)</p>
                  <div>
                    <b style={{ float: "left", textDecoration: "underline" }}>
                      Roles & Responsibilities:
                    </b>
                    <br />
                    <p style={{ textAlign: "left" }}>
                      1) Developed and maintained web application user
                      interfaces by leveraging React.js. <br /> 2) Produced
                      clean, well-organized, and sustainable code to ensure the
                      application's adaptability to evolving requirements.
                      <br /> 3) Designed reusable React components and libraries
                      for seamless integration across different application
                      sections.
                      <br /> 4) Managed application state using Redux and
                      React's built-in state management, ensuring efficient data
                      flow and user interactions.
                      <br /> 5) Implemented client-side routing through tools
                      like React Router, enabling smooth navigation within the
                      application.
                      <br /> 6) Established connections between the frontend and
                      backend services and APIs, overseeing data retrieval and
                      transmission to the server.
                      <br /> 7) Identified and rectified performance bottlenecks
                      in the application, optimizing rendering, minimizing
                      unnecessary re-renders, and employing lazy-loading for
                      components.
                      <br /> 8) Ensured consistent functionality across various
                      web browsers and addressed browser-specific issues.
                      <br /> 9) Utilized version control systems like Git to
                      track and manage code changes.
                      <br /> 10) Designed custom icons and symbols for
                      navigation, buttons, and interactive elements, upholding
                      conformity with the application's design language.
                      <br />
                      <b>Skills:</b>
                      <p>
                        GitHub · CSS3 · React.js · Git · JavaScript · Bootstrap
                      </p>
                    </p>
                  </div>
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
                    className="mt-3"
                  />
                  <br />
                  <p>Freelance (Jan 2021 - Jun 2021)</p>
                  <div>
                    <b style={{ float: "left", textDecoration: "underline" }}>
                      Roles & Responsibilities:
                    </b>
                    <br />
                    <p style={{ textAlign: "left" }}>
                      1) Worked on creating and maintaining the user interfaces
                      of web applications using React.js.
                      <br /> 2) wrote clean, organized, and maintainable code to
                      ensure that the application is easy to understand and
                      modify as requirements change over time.
                      <br /> 3) Worked on creating reusable React components and
                      libraries that can be easily integrated into different
                      parts of the application.
                      <br /> 4) Implemented state management using tools like
                      Redux and React's built-in state management to manage the
                      application's data flow and user interactions.
                      <br /> 5) Set up and manage client-side routing using
                      libraries like React Router to enable seamless navigation
                      within the web application.
                      <br /> 6) Connect the front-end to back-end services and
                      APIs, handling data retrieval and sending data to the
                      server.
                      <br /> 7) Identify and resolve performance bottlenecks in
                      the application, making it faster and more efficient. This
                      can involve optimizing rendering, reducing unnecessary
                      re-renders, and lazy-loading components.
                      <br /> 8) Making the application work consistently across
                      different web browsers, and addressing any
                      browser-specific issues.
                      <br /> 9) Use version control systems like Git to track
                      changes.
                      <br /> 10) Creating custom icons and symbols that are used
                      for navigation, buttons, and other interactive elements,
                      ensuring they are consistent with the application's design
                      language.
                      <br />
                      <b>Skills:</b>
                      <p>
                        GitHub · CSS3 · React.js · Git · HTML5 · JavaScript ·
                        Bootstrap · MySQL
                      </p>
                    </p>
                  </div>
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
