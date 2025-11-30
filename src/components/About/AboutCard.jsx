import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I’m <span className="main-name">Liauw Yan Jie</span>{" "}
            from <span className="main-name">Singapore</span>!
            <br />
            I’m currently a Year 2{" "}
            <span className="main-name">Cybersecurity and Digital Forensics</span> diploma student at{" "}
            <span className="main-name">Ngee Ann Polytechnic</span>.
            <br />
            <br />
            Outside of studying, I enjoy engaging in activities that keep me busy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga 📖 
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music  🎵
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "It's better to regret doing something than to regret not having done anything."{" "}
          </p>
          <footer className="blockquote-footer">Liauw Yan Jie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
