import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import { Container } from "react-bootstrap";

function Contact(props) {
return (
    <Container id="contact" fluid className="contact-container d-inline-flex text-dark p-5">
        <Container id="hero-text-container"  className="d-flex flex-column my-auto">
            <h1 className="text-center">Contact works!</h1>
            <p className="text-center">Reach me at</p>
            <div className="d-flex justify-content-evenly">
                <a className="" href="https://www.linkedin.com/in/juanmarquez4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                <a href="https://github.com/juanmarquez4" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
            </div>
        </Container>
    </Container>
    
)
} 

export default Contact;