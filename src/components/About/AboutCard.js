import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Tayade </span>
            from <span className="purple"> Shegaon, India.</span>
            <br />
            I am currently employed as a Associate Tech Program Manager at Dfy-Graviti.
            <br />
            I have completed B.Tech in ECE (Avionics) from Indian Institute of Space Science and Tecgnology,
            Trivandrum.
            <br />
            <br />
            Apart from Technical projects, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Dancing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Skating
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
