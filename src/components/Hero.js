import React from "react";
import { Container, Image } from "react-bootstrap";

function Hero() {

    return(
    <Container  fluid className="container d-inline-flex text-dark p-5">
        <Container id="hero-text-container"  className="">
            <h1 className="display-4 fw-bold text-center">Welcome to my Portfolio</h1>
            <hr></hr>
            <p>I am a Front-end Web Developer</p>
        </Container>
        <Container id="hero-image-container" className="">
            <div className="position-relative top-50 start-50 translate-middle text-center">
            <Image src="https://placehold.co/600x400" fluid />
            </div>
        </Container>
    </Container>
    )
}

export default Hero;