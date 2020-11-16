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
                                        <strong>Duration:</strong> July 2020 - Present
                                        <br/>
                                        <strong> Description </strong>
                                        <br/>
                                        <ul className="text-left">
                                            <li>Assigned to automation and configuration of application monitoring pipelines & DevOps for upcoming cloud platform with ELK stack</li>
                                            <li>Utilised React & React-admin library to contribute features and bug fixes to a centralised website that serves as the UI between clients & server/applications </li>
                                            <li>Set-up and pushed application monitoring pipelines for several in-house application logs, with Logstash & its plugins as well as Python, into production environments </li>
                                            <li>Wrote a script with Javascript to display data onto Grafana, by making API calls and then injecting the fetched data into HTML components created by the script </li>
                                            <li>Performed CRUD operations and joins on multiple schemas/tables in main Postgre databases to load/remove/manipulate data as part of  the 
                                             project requirements.</li>
                                            <li>Spearheading the migration of version-control tool Liquibase onto database and DevOps platform</li>
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
                                            <li>Developed RESTful endpoints to support CRUD operations based on mockups, for mobile frontend to fetch data from database</li>
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
