import React from "react";
import { Container, Image } from "react-bootstrap";

function Section() {
    return (
    <>
        <Container fluid className="container d-inline-flex text-dark p-5">
            <Container className="section-text-container">
                <h2 className="display-4 fw-bold text-center">Project#1 </h2>
                <h3 className="text-center">subtitle</h3>
            </Container>
            <Container className="section-image-container">
                <Image src="https://placehold.co/600x400" fluid />
            </Container>
        </Container>
        
        <Container fluid className="container d-inline-flex text-dark p-5">
            <Container className="section-text-container">
                <h2 className="display-4 fw-bold text-center">Project#2 </h2>
                <h3 className="text-center">subtitle</h3>
            </Container>
            <Container className="section-image-container">
                <Image src="https://placehold.co/600x400" fluid />
            </Container>
        </Container>
        </>
    
    )
}

export default Section;