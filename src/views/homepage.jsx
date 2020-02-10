import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import '../styles/homepage.scss'

import About from '../components/about'
import Contact from '../components/contact'
import Projects from '../components/projects'

class Homepage extends Component {
    render() {
      return (
        <div id='content'>
            <Row className='section'>
                <About/>
            </Row>
            <Row className='section'>
                <Projects/>
            </Row>
            <Row className='section'>
                <Contact/>
            </Row>
        </div>
      );
    }
}

export default Homepage