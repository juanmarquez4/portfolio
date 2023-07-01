import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

import { Container } from "react-bootstrap";


function HomePage(props) {
return (
    <Container className="container">
        <Hero/>
        <hr className="m-0" />
        <About/>
        <hr className="m-0" />
        <Projects/>
        <hr className="m-0" />
        <Contact/>
    </Container>
       
    
)
} 

export default HomePage;