import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import endpoint from "../../Assets/Projects/endpoint.svg";
import nids from "../../Assets/Projects/nids.svg";
import fids from "../../Assets/Projects/fids.svg";
import malware from "../../Assets/Projects/malware.svg";
import comps from "../../Assets/Projects/comps.svg";
import network from "../../Assets/Projects/network.svg";
import xss from "../../Assets/Projects/xss.svg";
import sheets2task from "../../Assets/Projects/sheets2task.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="main-name">Works </strong>
        </h1>
        <p style={{ color: "rgb(227, 227, 227)" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={endpoint}
              isBlog={false}
              title="Endpoint Detection and Response System"
              description="A fully Python EDR system that monitors and protects from known malicious threats and suspicious activities in real-time. It includes features like file integrity monitoring, process monitoring, network monitoring, and threat response mechanisms."
              ghLink="https://github.com/yanjie360/Sentinel-EDR"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nids}
              isBlog={false}
              title="Network Intrusion Detection System"
              description="A fully Python NIDS that monitors network traffic for suspicious activities and potential threats. It uses signature-based detection to identify known attack patterns and anomaly-based detection to spot unusual behavior."
              ghLink="https://github.com/yanjie360/Sentinel-NIDS"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fids}
              isBlog={false}
              title="Flight Information Display System"
              description="A FIDS Console App built in C# displays airport flight information such as arrivals, departures, delays, and gate assignments. Able to create and manage flight schedules."
              ghLink="https://github.com/yanjie360/C-Sharp-FIDS"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malware}
              isBlog={false}
              title="njRAT v7.0 Malware Analysis and Patching"
              description="Analyzed the njRAT v7.0 malware's source code to identify and patch critical security vulnerabilities. Patched it to remove persistence mechanisms, disable keylogging, and prevent unauthorized access."
              ghLink="https://github.com/YanJie360/njRAT_Malware_Analysis"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comps}
              isBlog={false}
              title="Windows and Linux Server Integration and Hardening"
              description="Configured and hardened Windows Server 2022 and Ubuntu Linux servers to enhance security and performance. Built AD with OU structure, GPOs, and DHCP services on Windows Server, implemented Snort IDS with Syslog. Implemented AppArmor on Ubuntu. Used SSID to integrate both servers."
              ghLink="https://github.com/YanJie360/WinSvr22_Ubuntu_Integration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={network}
              isBlog={false}
              title="Palo Alto Networks PA-VM Firewall Configuration"
              description="Configured PA-VM firewall to secure network infrastructure. Set up security policies, NAT rules, and VPNs to protect against threats. Monitored traffic and optimized performance using Palo Alto's Panorama."
              ghLink="https://github.com/YanJie360/Firewall_Configuration"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xss}
              isBlog={false}
              title="Samy XSS"
              description="Developed a XSS worm to infinitely propagate across an artificial social network, demonstrating the potential impact of XSS vulnerabilities."
              ghLink="https://github.com/YanJie360/WAPT_XSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sheets2task}
              isBlog={false}
              title="Sheet2Tasks"
              description="Self-initiated project to integrate Google Sheets with Google Tasks using Google Apps Script, enabling automatic task creation from spreadsheet data to enhance productivity."
              ghLink="https://github.com/YanJie360/Sheet2Tasks"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
