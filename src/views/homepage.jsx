import React, { useState, useEffect } from 'react';
import VizSensor from 'react-visibility-sensor';

import Row from 'react-bootstrap/Row';

import '../styles/homepage.scss'

import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'

const Homepage = () => {
    const [visible, setVisible] = useState(true);
    
    const onChange = (isVisible) => {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    }

    return (
        <div className='content'>
            <VizSensor
                onChange={onChange}
            >
                <Row className='section'>
                    <About />
                </Row>
            </VizSensor>
            <Row className='section primary-section'>
                <Projects />
            </Row>
            <Row className='section primary-section'>
                <Contact />
            </Row>
        </div>
    );
}

export default Homepage