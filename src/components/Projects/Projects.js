import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xolt from "../../Assets/Projects/xolt.png";
import xmkt from "../../Assets/Projects/xMKT.png";
import xadmin from "../../Assets/Projects/xadmin.png";
import exorover from "../../Assets/Projects/rover.png";
import spotreal from "../../Assets/Projects/spotreal.png";
import homelab from "../../Assets/Projects/homelab.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xolt}
              isBlog={false}
              title="xOLT"
              description="GPON OLT management suite with the ability to manage clients, bandwidth profiles, ONU types and much more. 
              This project is currently in the Alpha phase, I am implementing it in Alter-NET SRL's ISP network for managing multiple ZTE-C300 devices. 
              In the future I plan to create an Android/iOS app for managing the OLTs remotely."
              ghLink="https://github.com/ZsoltGergely/xOLT"
              demoLink="https://olt.xdd.ro/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xmkt}
              isBlog={false}
              title="xMKT"
              description="Management software for MikroTik devices running RouterOS and SwOS. It can be used to keep device configurations in sync, update firmware, 
              provide an intuitive inteface for managing a large number of devices, send alerts of the status of the network, automatically discover
              and collect data. I intend to implement a REST API for the software, so that it can be easily implemented into an existing tech stack.
              This project is also currently being rolled out in Alter-NET SRL's network on over 400 devices."
              ghLink="https://github.com/ZsoltGergely/xMKT"
              demoLink="https://olt.xdd.ro/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotreal}
              isBlog={false}
              title="SpotReal"
              description="A small proof of concept project for a Snapchat-like app. It is built using React Native, Express.js and Expo. 
              It connects to your Spotify account and allows you to share your current song with your friends. All shared songs appear on a map, so you can check out 
              what people are listening to around you."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={homelab}
              isBlog={false}
              title="HomeLab"
              description="I also have a small homelab with an HP server and a few Raspberry Pis, where I run a few VMs for testing and learning.
              It's mostly used for learning and testing new technologies. I also have all my projects running on it along with instances such as JellyFin, an *Arr Stack, my WEB servers, HomeAssistant and a few other things."           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xadmin}
              isBlog={false}
              title="xAdmin"
              description="An custom admin panel featuring a few sistems I've developed for Alter-NET SRL. It is currently being used by the company's employees.
              It features a custom SMS gateway system, a ticketing system, a assignment system, a network monitoring system(watchdog) and a VM provisioning system for ESXI."
              ghLink="https://github.com/ZsoltGergely/admin.xdd.ro"
              demoLink="https://admin.xdd.ro/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exorover}
              isBlog={false}
              title="ExoROVER"
              description="
              A remote controlled rover for an ESERO competition. It is equipped with a camera, a GPS module, a gyroscope, a magnetometer, 
              a thermometer and a barometer. It can be controlled via a custom client. It was built using an Arduino, a Raspberry Pi 4 and a lot of other sensors and components.
              We created this project in a team ran by Pető Mária, a teacher at the Székely Mikó Kollégium in Sfantu Gheorghe."
              ghLink="https://github.com/ZsoltGergely/Rover"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
