import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <React.Fragment>
      <div className="container text-center" style={{ marginTop: "50px" }}>
        <div class="card title_card">
          <div class="card-body">
            <h4
              style={{ color: "black", fontSize: "20px" }}
              className="my_name"
            >
              Hi, I’m{" "}
              <span style={{ color: "#6e07f3" }}>
                Venkata Rajashekar Reddy Chinthala.
              </span>{" "}
              Nice to meet you.
            </h4>
            <p style={{ marginTop: "20px", textAlign: "left" }}>
              <b>1)</b> Over the past year, I have embarked on my journey as a
              designer, engaging in a variety of projects. I have offered
              consultation services to startups and actively participated in
              collaborations with skilled individuals to develop digital
              products targeted at both business and consumer audiences. With a
              quiet confidence and a natural curiosity, I am constantly striving
              to enhance my design skills by tackling diverse design challenges
              as they arise. My commitment to continuous improvement drives me
              to overcome design obstacles one step at a time.
              <br />
              <b>2)</b> Experienced web developer skilled in crafting dynamic
              and visually appealing applications. Proficient in HTML, CSS, and
              ReactJS, I specialize in designing intuitive user interfaces and
              implementing diverse modules to meet project requirements.
              <br />
              <b>3)</b> Leveraging Javascript for service handling and SQL
              Server for robust databases. Passionate about creating seamless,
              responsive UIs with CSS3 and HTML5. Adept at utilizing React
              Router and NPM components for efficient single-page applications.
              <br />
              <b>4)</b> Committed to staying current with the latest
              technologies and collaborating within cross-functional teams.
              Strong track record of successful code deployment and
              contributions to GitHub.
            </p>
          </div>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center mt-5"
        style={{ marginTop: "30px", fontSize: "17px" }}
      >
        <div
          class="card def_card"
          style={{ width: "30rem", border: "1px solid #6e07f3" }}
        >
          <div class="card-body">
            <i
              class="bi bi-code-slash"
              style={{
                fontSize: "40px",
                color: "#5BE9B9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></i>
            <p class="card-text mt-4">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <p style={{ color: "#6e07f3" }}>Languages I Speak</p>
            <p>
              HTML5, CSS3, JavaScript, TypeScript, Python, Angular, ReactJS,
              BootStrap, GIT
            </p>
            <p style={{ color: "#6e07f3" }}>Dev Tools</p>
            <p>
              <i
                class="bi bi-braces"
                style={{ marginRight: "5px", color: "#5BE9B9" }}
              ></i>
              VS Code
            </p>
            <p>
              <i
                class="bi bi-braces"
                style={{ marginRight: "5px", color: "#5BE9B9" }}
              ></i>
              WebStrom
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
