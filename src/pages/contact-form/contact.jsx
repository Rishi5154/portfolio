import React from 'react'
import "./contact.css"
import { Jumbotron, Row, Col, Button } from 'react-bootstrap'

export const Contact = () => {
    return (
        <div id='contact'>
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron>
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        <div className="m-2">
                            <a href="mailto:rishi5154@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="rishi5154@gmail.com">
                                    <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                        </div>         
                        <div className="m-2">
                            <a href="https://github.com/Rishi5154" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                        </div>
                        <div className="m-2">
                            <a href="https://www.linkedin.com/in/rishi-ravikumar-65b5b8195/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                        </div>                       
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    )
}
