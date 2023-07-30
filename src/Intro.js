import React from "react";
import "./Intro.css";

function Intro() {
  return (
    <React.Fragment>
      <div
        className="container text-center"
        style={{ margin: "30px", marginTop: "20px" }}
      >
        <div class="card title_card">
          <div class="card-body">
            <h4
              style={{ color: "black", fontSize: "20px" }}
              className="my_name"
            >
              Hi, I’m{" "}
              <span style={{ color: "#6e07f3" }}>Venkata Chinthala.</span> Nice
              to meet you.
            </h4>
            <h4 style={{ color: "black", fontSize: "17px", marginTop: "20px" }}>
              Over the past year, I have embarked on my journey as a freelance
              designer, engaging in a variety of remote projects. I have offered
              consultation services to startups and actively participated in
              collaborations with skilled individuals to develop digital
              products targeted at both business and consumer audiences. With a
              quiet confidence and a natural curiosity, I am constantly striving
              to enhance my design skills by tackling diverse design challenges
              as they arise. My commitment to continuous improvement drives me
              to overcome design obstacles one step at a time.
            </h4>
          </div>
        </div>
      </div>
      <div
        className="container d-flex justify-content-center mt-5"
        style={{ margin: "20px" }}
      >
        <div class="card" style={{ width: "30rem" }}>
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
            <p class="card-text">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Intro;
