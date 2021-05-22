import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import "./aboutMe.css";
import { Button } from 'react-bootstrap';

export const AboutMe = () => {
    return (
        <div id="about">
            <h1 className="pt-3 text-center font-details pb-3" style={{color: "navy"}}>About Me</h1>
                <Container style={{paddingBottom: 30}}>
                    <Row className="align-items-start p-2 my-details rounded">
                        <Col className="align-items-start p-2 centering" xs={10} md={7}>
                            <Row className="align-items-start p-2">
                                Hi there! My name is <strong>&nbsp;Rishi Ravikumar</strong>
                                <br />I'm an undergraduate student majoring in Computer science at the National University of Singapore.
                                <br />
                                As of now, I have interned at early-stage startups & government organisations, completed successful projects and am currently interning at a 'Big 4' firm in Singapore.
                                <br />
                                Being a fresh-faced entry into the realm of computing, I have to confess that I've thoroughly enjoyed my journey so far, and currently am on the lookout for exciting opportunities as a SWE.
                                <br />
                                I firmly believe in venturing outside of my boundaries and spending my time maximizing the most out of my computing education. 
                                <br /> <br />
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-success">
                                                Contact me
                                            </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/Rishi5154" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/rishi-ravikumar-65b5b8195/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}
