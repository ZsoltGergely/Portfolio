import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gergely Zsolt </span>
            from <span className="purple"> Sfantu Gheorghe, Romania.</span>
            <br />I am currently a Student at UnitBV IESC learning CompSci.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing around with Server Side Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with new stuff in tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
