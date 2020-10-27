import React from 'react'

import './skills.css'
import { CardDeck, Row, Col, Card } from 'react-bootstrap'
import {skills} from "./data"
import Image from 'react-bootstrap/Image'

export const Skills = () => {
    return (
        <div id="skills" className="pt-3 pb-3">
            <h1 className="text-center font-details-b pb-4">Skills</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around" style={{flex: 1}}>

                    {/* Frontend skills  */}
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title"> Frontend </Card.Title>
                                <hr/>
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {
                                    skills.frontend.map((skill, index) => (
                                        <span className="p-2" key={`${skill.skillName}${index}`}>
                                            <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                                <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"/> {skill.skillName}
                                            </a>
                                        </span>
                                    ))
                                }
                                </Card.Text>
                            </Card.Body>    
                        </Card>
                    </Col>

                    {/* Backend skills */}
                    
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2" >
                            <Card.Body>
                                <Card.Title className="text-center card-title">Backend</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.backend.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                    </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        {/* Others */}
                        <Card className="focus mt-2 mb-2" >
                            <Card.Body>
                                <Card.Title className="text-center card-title">Others</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.others.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                    </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Col>

                    {/* Programming Languages */}
                    <Col md={4} >
                        <Card className="focus mt-2 mb-2" style={{ width: '20rem'}}>
                            <Card.Body>
                                <Card.Title className="text-center card-title">Programming</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.languages.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                    </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* Database */}
                        <Card className="focus mt-2 mb-2" style={{ width: '20rem'}}>
                            <Card.Body>
                                <Card.Title className="text-center card-title">Database</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.database.map((skill, index) => (
                                    <span className="p-2" key={index}>
                                    <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                                    </a>
                                    </span>
                                ))}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </CardDeck>
        </div>
    )
}
