import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Hammad </span>
            from <span className="purple"> Punjab, Pakistan.</span>
            <br />
            I am currently employed as a Flutter developer at ITCoderz.
            <br />
            Experienced Flutter Developer skilled in designing and developing production-level mobile applications
            <br />
            <br />
           
          I have experience developing mobile applications for both Android and iOS platforms using various technologies as backend. I am eager to continue learning and staying up-to-date with the latest industry trends and advancements, so I can create innovative solutions for complex problems. 
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Hammad</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
