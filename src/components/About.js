import React from "react";

import { Container, Image } from "react-bootstrap";
import wave from '../assets/images/wave.jpeg'

function About() {
return (
    <Container fluid id="about" className="container d-inline-flex text-dark p-5">
        <Container id="hero-image-container" className="">
            <div className="position-relative top-50 start-50 translate-middle text-center">
                <Image thumbnail className="" src={wave} fluid style={{height:"500px"}} />
            </div>
        </Container>
        <Container id="hero-text-container"  className="d-flex flex-column my-auto">
            <h1>About works!</h1>
            <p>Hello, My name is Juan Marquez. A Front-end Web Developer based in Sydney, Australia.</p>
        </Container>
    </Container>
    
)
} 

export default About;