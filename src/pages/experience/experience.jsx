import React from 'react'
import Tilt from 'react-tilt'
import L_Mas from "../../assets/img/skills/mas_logo-2.svg"
import L_Climbpass from "../../assets/img/skills/climbpass-logo.png"
import L_PwC from "../../assets/img/skills/PwC.png"
import L_Yara from "../../assets/img/skills/yara.png"
import L_Visa from "../../assets/img/skills/visa.svg"
import { Jumbotron, Container, Card } from 'react-bootstrap'
import "./experience.css"

const experienceData = [
    
    {
        id: 'Visa',
        img: L_Visa,
        title: 'Software Engineer Intern (Full-stack)',
        duration: 'May 2022 - Oct 2022',
        scope: ['Assigned to fullstack development on VisaNet (Network processing team)'],
        stack: 'Yet to be known...'
    },
    {
        id: 'Yara',
        img: L_Yara,
        title: 'Software Engineer Intern (Backend)',
        duration: 'Jan 2022 - May 2022',
        scope: ['Assigned to backend development and QA for React Native based Farmcare mobile app using Node, Nest & Typescript, with Jest for testing.'],
        stack: 'NodeJS, Nest, Jest, Typescript, React Native'
    },
    {
        id: 'PwC',
        img: L_PwC,
        title: 'Software Engineer Intern',
        duration: 'May 2021 - July 2021',
        scope: [
            'Assigned to development of a technical Proof-of-Concept(PoC) for the firm, in the form of a full stack web application to expedite the process of talent profiling and out-sourcing.',
            'Engaged in end-to-end development for the PoC, from ideation to presentation of PoC to upper layers of management (director, partners) as well as software development with Angular, .NET Core & technical documentation.',
            "Crafted several Google App Scripts using Javascript to automate several workflows like templating, email delivery & event scheduling within the firm's recruitment processes, saving around 30 hours per week on average.",
            'Developed and published key visualisations of internal resource management, digital platform metrics with PowerBI, Power Query for upper management.',
            'Rendered to the full-stack development of features for current, internal web applications, using ASP.NET & MSSQL.'
        ],
        stack: 'Angular, Typescript, Material UI, MSSQL, Google Apps Scripts, PowerBI, ASP.NET'   
    },
    {
        id: 'MAS',
        img: L_Mas,
        title: 'Software Engineer Intern',
        duration: 'July 2020 - Jan 2021',
        scope: [
            'Assigned to automation and configuration of application monitoring pipelines & DevOps for upcoming cloud platform with ELK stack',
            'Utilised React & React-admin library to contribute features and bug fixes to a website for application/server management',
            'Set-up pipelines with Logstash & Python for application monitoring and creation of dashboards with Grafana',
            'Performed CRUD operations and joins on multiple schemas/tables in main Postgre databases to load/remove/manipulate data as part of the project requirements.',
            'Spearheaded the end-to-end migration of open source version-control tool Liquibase onto database and DevOps platform, hence integrating version control and' + 
            'automation of database changes into development & production environments.',
            'Exposure to daily stand-up meetings and effective project management with Agile-Scrum methodology on Jira'
        ],
        stack: 'React, Postgres, Javascript, ELK stack, Python'   
    },
    {
        id: 'Climbpass',
        img: L_Climbpass,
        title: 'Backend Developer Intern',
        duration: 'May 2020 - Dec 2020',
        scope: [
            'Developed RESTful endpoints to support CRUD operations, in conjuction with prototypes created by UI/UX designers'
        ],
        stack: 'Java, Spring Boot, Postgres'   
    }
]

export const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">Experience</h1>
                <Jumbotron className="jumbo-style">
                    <Container>
                        {
                            experienceData.map((exp, index) => {
                                return (
                                <Tilt options={{ max: 10}}>
                                    <Card>
                                        <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                            <Card.Img variant="top" className={ exp.id === 'PwC' ? "img-resize img-padding" : "img-resize"} src={exp.img} alt="PwC logo" />
                                        </Card.Header>
                                        <Card.Body className="d-flex justify-content-center flex-column">
                                            <div>
                                                <Card.Title className="text-center">{exp.title}</Card.Title>
                                            </div>
                                            <div>
                                            <Card.Text className="text-center style">
                                                {/* <br/> */}
                                                <strong>Duration:</strong> {exp.duration}
                                                <br/>
                                                <br/>
                                                <strong> Description </strong>
                                                <hr/>

                                                <ul className="text-left">
                                                    {
                                                        exp.scope.length === 1 ? <li> {exp.scope[0]} </li> :  exp.scope.map((item, index) => {
                                                            return <li> {item} </li>
                                                        })
                                                    }
                                                </ul>
                                                {/* <br/> */}
                                                <strong> Tech stack employed </strong> : {exp.stack}
                                                <br/>
                                            </Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                    <Card.Footer/>
                                </Tilt>
                                )
                            })
                        }
                    </Container>
                </Jumbotron>
        </div>
    )
}
