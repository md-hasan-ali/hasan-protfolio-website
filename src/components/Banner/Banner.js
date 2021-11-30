import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import hasan from '../../images/hasan.png'
import Particles from 'react-particles-js';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area' id='home'>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }} />
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
                            <h2 className='pb-2'>I am a Web Developer</h2>
                            <Button onClick={() => window.open('https://drive.google.com/file/d/1vcc4aRylWOMEh96ZbTx08nCKiGUMMxuc/view?usp=sharing', '_blank')} variant='success'>Download Resume</Button>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Banner;