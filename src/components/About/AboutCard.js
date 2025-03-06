import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sudula Sivaji </span>
            from <span className="purple"> visakhapatnam, India.</span>
            <br />
            I am a Full-Stack developer. Looking for an internship.
            <br />
            I am currenntly pursuing B.Tech in Computer Science from Mohan Babu University in Andhra Pradesh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sivaji</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
