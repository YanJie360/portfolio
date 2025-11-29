import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Vmware from "../../Assets/TechIcons/Vmware.svg";
import VisualStudio from "../../Assets/TechIcons/VisualStudio.svg";
import Wireshark from "../../Assets/TechIcons/Wireshark.png";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import BurpSuite from "../../Assets/TechIcons/BurpSuite.svg";
import Kali from "../../Assets/TechIcons/Kali.svg";
import ZAP from "../../Assets/TechIcons/ZAP.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import PaloAlto from "../../Assets/TechIcons/paloalto.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VSCode</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Vmware} alt="Vmware" className="tech-icon-images" />
        <div className="tech-icons-text">Vmware</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={VisualStudio} alt="Visual Studio" className="tech-icon-images" />
        <div className="tech-icons-text">Visual Studio</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Wireshark} alt="Wireshark" className="tech-icon-images" />
        <div className="tech-icons-text">Wireshark</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={BurpSuite} alt="BurpSuite" className="tech-icon-images" />
        <div className="tech-icons-text">Burp Suite</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kali} alt="Kali" className="tech-icon-images" />
        <div className="tech-icons-text">Kali</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ZAP} alt="ZAP" className="tech-icon-images" />
        <div className="tech-icons-text">ZAP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PaloAlto} alt="PaloAlto" className="tech-icon-images" />
        <div className="tech-icons-text">Palo Alto</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
