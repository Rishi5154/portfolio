import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import L_Plannus from "../../assets/img/projects/planNUS.jpg"
import L_Todo from "../../assets/img/projects/react-todo.jpg"
import L_HTML from "../../assets/img/skills/html-5.svg"
import L_CSS from "../../assets/img/skills/css3.svg"
import L_React from "../../assets/img/skills/react.svg"
import L_Django from "../../assets/img/skills/django.svg"
import L_Flutter from "../../assets/img/skills/flutter-logo.svg"
import L_Firebase from "../../assets/img/skills/firebase-1.svg"
import "./timeline.css"
import { Accordion, Card, Image} from 'react-bootstrap'

export const TimeLine = () => {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">Projects</h1>
            <Timeline>
                <Events>
                <ImageEvent 
                date="27/09/2020" className="text-center" 
                text="**React Todo App**"
                src={L_Todo} alt="React ToDo App"
                >
                <div className="d-flex justify-content-between flex-column mt-1">
                 <div>
                    <Accordion color="yellow">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                PROJECT DETAILS
                            </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Simple todo CRUD app with React & Django
                                        <hr />
                                        <strong>Tech used:</strong>
                                        <ul>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_React}
                                                alt="React"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            React
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_HTML}
                                                alt="HTML 5"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            HTML5
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_CSS}
                                                alt="CSS 3"
                                                rounded
                                                className="image-style m-1"
                                            ></Image>{" "}
                                            CSS3
                                            </span>
                                        </li>
                                        <li>
                                            <span className="p-2">
                                            <Image
                                                src={L_Django}
                                                alt="Django"
                                                rounded
                                                className="image-style1 m-1"
                                            ></Image>{" "}
                                            Django
                                            </span>
                                        </li>  
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="align-middle">
                                <UrlButton
                                href="https://github.com/Rishi5154/React-CRUD"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                            </div>
                        </div>
                     </ImageEvent>
                     {/* PlanNUS */}
                     <ImageEvent 
                        date="26/08/2020" className="text-center" 
                        text="**PlanNUS**"
                        src={L_Plannus} alt="PlanNUS"
                        >
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                        <Accordion>
                            <Card bg="primary">
                                <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">
                                    PROJECT DETAILS
                                </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A mobile application made available on Android devices whereby
                                            users can speed up/simplify the process of event-planning
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Event & Activity tracking</li>
                                                <li>Meeting scheduler</li>
                                                <li>Notification & Messaging System</li>
                                                <li>Location service </li>
                                                <li>Powered by Flutter, Firebase & Google Maps API</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech used:</strong>
                                            <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_Flutter}
                                                    alt="Flutter"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Flutter
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_Firebase}
                                                    alt="HTML 5"
                                                    rounded
                                                    className="image-style m-1"
                                                ></Image>{" "}
                                                Firebase
                                                </span>
                                            </li>
                                            </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://nusskylab-dev.comp.nus.edu.sg/posters/2020/2041.png"
                                    target="_blank"
                                >
                                    POSTER
                                </UrlButton>
                                <UrlButton
                                href="https://github.com/Rishi5154/planNUS_backup"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                                <UrlButton
                                    href="https://www.youtube.com/watch?v=YAiL6hggPZA&feature=youtu.be"
                                    target="_blank"
                                >
                                    LIVE DEMO
                                </UrlButton>
                            </div>
                        </div>
                     </ImageEvent>
                </Events>
             </Timeline>
        </div>
    )
}