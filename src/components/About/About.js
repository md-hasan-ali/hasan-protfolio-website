import React from 'react';
import './About.css'
import aboutImg from '../../images/hasan-img2.png'

const About = () => {
    return (
        <div className='about-area py-5' id='about'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="about-content">
                            <h2>About Me!</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus libero, unde optio impedit quisquam enim quibusdam fugiat illum odit tenetur veritatis laboriosam ipsam nostrum corrupti!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque architecto fugiat ipsa quaerat mollitia porro reprehenderit eveniet cum obcaecati numquam, nulla pariatur est asperiores! Dolorem.</p>
                            <button className='btn btn-danger'>Contact Me!</button>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="about-image">
                            <img className='hasan' src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;