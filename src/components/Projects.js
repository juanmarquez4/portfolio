import React from "react";
import { Container, Image } from "react-bootstrap";
import pexel from '../assets/images/pexels-charliehelen-robinson-6622518.jpg'

function Projects() {
    return (
    <Container id="projects" fluid className="container d-flex flex-column text-dark p-5">
        <Container fluid className="container d-inline-flex text-dark p-0">
            <Container className="section-text-container my-auto">
                <h2 className="display-4 fw-bold text-center">Project#1 </h2>
                <h3 className="text-center">subtitle</h3>
            </Container>
            <Container id="hero-image-container" className="">
                <div className="position-relative top-50 start-50 translate-middle text-center">
                    <Image thumbnail className="" src={pexel} fluid style={{height:"500px"}} />
                </div>
            </Container>
        </Container>
        
        <Container fluid className="container d-inline-flex text-dark p-0">
            <Container className="section-text-container my-auto">
                <h2 className="display-4 fw-bold text-center">Project#2 </h2>
                <h3 className="text-center">subtitle</h3>
            </Container>
            <Container id="hero-image-container" className="">
                <div className="position-relative top-50 start-50 translate-middle text-center">
                    <Image thumbnail className="" src={pexel} fluid style={{height:"500px"}} />
                </div>
            </Container>
        </Container>
    </Container>
      
        
    )
}

export default Projects;