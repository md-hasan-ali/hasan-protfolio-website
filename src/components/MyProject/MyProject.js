import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import project1 from '../../images/project1.jpg'
import project2 from '../../images/project2.jpg'
import project3 from '../../images/project3.jpg'
import project4 from '../../images/project4.jpg'
import project5 from '../../images/project5.jpg'
import project6 from '../../images/project6.jpg'

const projects = [
    {
        "img": `${project1}`,
        "name": 'Online Car Shop',
    },
    {
        "img": `${project2}`,
        "name": 'Traveling Website',
    },
    {
        "img": `${project3}`,
        "name": 'Alfa Diagonstic Center',
    },
    {
        "img": `${project4}`,
        "name": 'Programming Learning Website',
    },
    {
        "img": `${project5}`,
        "name": 'Top Islamic Scholars Website',
    },
    {
        "img": `${project6}`,
        "name": 'E-commerce Website',
    },
]

const MyProject = () => {
    return (
        <div className='my-projects py-5' id='projects'>
            <div className="container">
                <div className="section-title pb-4 text-center">
                    <h2>My Latest Works</h2>
                    <p>Hi, i'm Hasan Ali, Experience crafter from Bangladesh.</p>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        projects.map(project =>
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src={project?.img} />
                                    <Card.Body>
                                        <Card.Title>{project.name}</Card.Title>
                                        <button className='btn btn-danger'>Details</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    }
                </Row>
            </div>
        </div>
    );
};

export default MyProject;