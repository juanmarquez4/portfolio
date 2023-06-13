import React from "react";
import { Container, Image } from "react-bootstrap";
import profile from '../assets/images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



function Hero() {

    return(
    <Container  fluid className="container d-inline-flex text-dark p-5">
        <Container id="hero-text-container"  className="d-flex flex-column my-auto">
            <h1 className="display-4 fw-bold text-center">Front-End React Developer</h1>
            {/* <hr></hr> */}
            <p>Hello, My name is Juan Marquez. A Front-end Web Developer based in Sydney, Australia.</p>
            <div className="">
                <a className="" href="https://www.linkedin.com/in/juanmarquez4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                <a href="https://github.com/juanmarquez4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
            </div>
        </Container>
        <Container id="hero-image-container" className="">
            <div className="position-relative top-50 start-50 translate-middle text-center">
            <Image thumbnail className="" src={profile} fluid />
            </div>
        </Container>
    </Container>
    )
}


export default Hero;