import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer () {
    return (
        <footer>
            <Container fluid>
                <Row className="justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Juan Marquez
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}> 
                        Developed by JC
                    </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default Footer;