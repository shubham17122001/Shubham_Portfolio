import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ShipSight from "../../Assets/Projects/ShipSight.png";
import BCI_experiment from "../../Assets/Projects/BCI_experiment.png";

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
              imgPath={ShipSight}
              isBlog={false}
              title="ShipSight"
              description="Used the Novasar AIS Data from Bhoonidhi (ISRO) portal and built a webApp using 'Python' and Streamlit. The ShipSight App is useful for Historical Study Analysis of AIS Data."
              ghLink="https://github.com/shubham17122001/Ships_Data_Reports"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BCI_experiment}
              isBlog={false}
              title="ML based classification of Marathi words for Brain Computer Interface Applications"
              description="Developed the first ever Marathi BCI Dataset and applied ML Algorithms for Classification of two and three Marathi words with accuracy of 80%"
              ghLink="https://github.com/shubham17122001/Machine-Learning-Based-Classification-of-Marathi-Words-for-Brain-Computer-Interface-Applications"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
