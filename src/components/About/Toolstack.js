import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiSlack,
  SiVercel,
  SiJupyter, 
  SiAnaconda,
   
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />     {/* Jupyter Notebook */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />    {/* Anaconda */}
      </Col>
    
      
    </Row>
  );
}

export default Toolstack;
