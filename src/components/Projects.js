import React from "react";
import { Container, Image } from "react-bootstrap";
import pexel from '../assets/images/pexels-pixabay-256262.jpg'

import SolarSystem from "../utils/SolarSystem";

function Projects() {
    return (
    <Container id="projects" fluid className="projects-container d-flex flex-column text-dark p-5">
        <Container fluid className="container d-inline-flex text-dark p-0 pb-5">
            <Container className="section-text-container my-auto">
                <h2 className="display-4 fw-bold text-center">Vilma Sanchez Laboratorio Clinico</h2>
                <p className="text-center">Paragraph with description of the application.</p>
                <h3 className="text-center">Technologies used!</h3>
                <div className="d-flex justify-content-evenly">
                   <a href="https://github.com/juanmarquez4/vilma-sanchez-laboratorio-clinico" target="_blank" rel="noreferrer">Link to Github</a>
                   <a href="https://juanmarquez4.github.io/vilma-sanchez-laboratorio-clinico/" target="_blank" rel="noreferrer">Link to Live demo</a> 
                </div>
            </Container>
            <Container id="hero-image-container" className="">
                <div className="position-relative top-50 start-50 translate-middle text-center">
                    <Image thumbnail className="" src={pexel} style={{maxHeight:"500px"}} fluid/>
                </div>
            </Container>
        </Container>
        
        <Container fluid className="projects-container-solar d-inline-flex text-dark p-0">
            <Container className="section-text-container my-auto">
                <h2 className="display-5 fw-bold text-center">More Projects</h2>
                {/* <p className="text-center">Paragraph with description of the application.</p> */}
                <h3 className="text-center">Coming soon!</h3>
                <div className="d-flex justify-content-evenly">
                   {/* <a href="" target="_blank" rel="noreferrer">Link to Github</a>
                   <a href="" target="_blank" rel="noreferrer">Link to Live demo</a>  */}
                </div>
            </Container>
            <Container>
                    <SolarSystem/>
                    {/* <Image thumbnail className="" src={pexel} style={{maxHeight:"500px"}} fluid/> */}
            </Container>
        </Container>
    </Container>
      
        
    )
}

export default Projects;