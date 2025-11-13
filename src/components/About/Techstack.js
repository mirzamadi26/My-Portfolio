import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  // DiJavascript1,
  // DiReact,
  // DiNodejs,
  // DiMongodb,
  // DiPython,
  // DiGit,
  // DiJava,
} from "react-icons/di";
import {
  // SiRedis,
  SiFirebase,
  // SiNextdotjs,
  // SiSolidity,
  // SiPostgresql,
  SiFlutter,
  SiDart,
  SiGithub,
  SiGit,
  // SiGoogleadmob,
  SiContactlesspayment,
  SiAppstore,
  SiGoogleplay,
} from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiContactlesspayment />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAppstore />
      </Col><Col xs={4} md={2} className="tech-icons">
        <SiGoogleplay />
      </Col>
      
     
    </Row>
  );
}

export default Techstack;
