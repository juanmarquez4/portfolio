import React from "react";
import { Container } from "react-bootstrap";
import '../solarSystem.css';

function SolarSystem () {
    return (
        <Container>
            <div className="solar-body">
                <div className="container-solar">
                    <div className="sun">JS</div>
                    <div className="earth">
                            <div className="moon">CSS</div>
                    </div>
                </div>
            </div>
        </Container>
          
        
    )
}

export default SolarSystem