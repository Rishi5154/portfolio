import React from 'react'
import Tilt from 'react-tilt'
import L_Mas from "../../assets/img/skills/mas_logo-2.svg"
import L_Climbpass from "../../assets/img/skills/climbpass-logo-1.svg"
import { Jumbotron, Container, Card } from 'react-bootstrap'
import "./experience.css"

export const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
                <Jumbotron className="jumbo-style">
                    <Container>
                        <Tilt options={{ max: 10}}>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" className="img-resize" src={L_Mas} alt="MAS logo" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Software Engineer intern</Card.Title>
                                    </div>
                                    <div>
                                    <Card.Text className="text-center style">
                                        {/* <br/> */}
                                        <strong>Duration:</strong> July 2020 - Jan 2021
                                        <br/>
                                        <strong> Description </strong>
                                        <br/>
                                        <ul className="text-left">
                                            <li>Assigned to automation and configuration of application monitoring pipelines & DevOps for upcoming cloud platform with ELK stack</li>
                                            <li>Utilised React & React-admin library to contribute features and bug fixes to a website for application/server management</li>
                                            <li>Set-up pipelines with Logstash & Python for application monitoring and creation of dashboards with Grafana</li>
                                            <li>Performed CRUD operations and joins on multiple schemas/tables in main Postgre databases to load/remove/manipulate data as part of the 
                                             project requirements.</li>
                                            <li>Spearheaded the end-to-end migration of open source version-control tool Liquibase onto database and DevOps platform, hence integrating version
                                                control and automation of database changes into development & production environments.
                                            </li>
                                            <li>Exposure to daily stand-up meetings and effective project management with Agile-Scrum methodology on Jira</li>
                                        </ul>
                                        {/* <br/> */}
                                        <strong> Tech stack employed </strong> : React, Postgres, Javascript, ELK stack, Python 
                                        <br/>
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card.Footer/>
                            </Tilt>
                            <Tilt options={{ max: 10}}>
                            <Card>
                                <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                    <Card.Img variant="top" className="img-resize" src={L_Climbpass} alt="Climbpass logo" />
                                </Card.Header>
                                <Card.Body className="d-flex justify-content-center flex-column">
                                    <div>
                                        <Card.Title className="text-center">Backend developer intern</Card.Title>
                                    </div>
                                    <div>
                                    <Card.Text className="text-center style">
                                        {/* <br/> */}
                                        <strong>Duration:</strong> May 2020 - Present
                                        <br/>
                                        <strong> Description </strong>
                                        <br/>
                                        <ul className="text-left">
                                            <li>Developed RESTful endpoints to support CRUD operations, in conjuction with prototypes created by UI/UX designers </li>
                                        </ul>
                                        {/* <br/> */}
                                        <strong> Tech stack employed </strong> : Java, Spring Boot, Postgres
                                        <br/>
                                    </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card.Footer/>
                        </Tilt>
                    </Container>
                </Jumbotron>
        </div>
    )
}
