import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import hasan from '../../images/hasan.png'
import Particles from 'react-particles-js';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area'>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={12} md={6}>
                        <div className="banner-image">
                            <img src={hasan} alt="hasan_ali_image" />
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="banner-content">
                            <h1>Hi, I am <br /> HASAN ALI</h1>
                            <h2>I am a Web Developer</h2>
                            <Button onClick={() => window.open('https://drive.google.com/file/d/1vcc4aRylWOMEh96ZbTx08nCKiGUMMxuc/view?usp=sharing', '_blank')} variant='success'>Download Resume</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": true,
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 5,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 10,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }} />
        </div>
    );
};

export default Banner;