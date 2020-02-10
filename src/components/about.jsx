import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../styles/about.scss'

class About extends Component {
    render() {
      return (
        <div id='about' className='d-flex justify-content-center align-items-center'>
          <Container>
            <div id='text'>
              <Col>
                <h1>
                  A little about me!
                </h1>
                <Row className='entry'>
                  I'm a fourth year Software Engineering student at Milwaukee School of Engineering!
                </Row>
                <Row className='entry'>
                  I spend my time on Website Development both in personal projects and Internships.
                </Row>
                <Row className='entry'>
                  If you are currently looking for a soon-to-graduate website developer for a full-time position please contact me&nbsp;
                  <Link to='#contact'>
                    here
                  </Link>
                </Row>
              </Col>
            </div>
          </Container>
        </div>
      );
    }
}

export default About