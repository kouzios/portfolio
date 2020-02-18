import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import '../styles/about.scss'

class About extends Component {
    render() {
      return (
        <div id='about' className='d-flex justify-content-center align-items-center'>
          <Container>
            <div id='text'>
              <Col>
                <h1 className='centered-text'>
                  Hi, I'm Matthew Kouzios!
                </h1>
                <h3>
                  Here's a little about me.
                </h3>
                <Row className='entry'>
                  I'm a fourth year Software Engineering student at&nbsp;
                  <a target="_blank" title='Homepage for MSOE' rel="noopener noreferrer" href='https://www.msoe.edu/'>
                    Milwaukee School of Engineering!
                  </a>
                </Row>
                <Row className='entry'>
                  I spend my time on Website Development both in personal projects and Internships.
                </Row>
                <Row className='entry'>
                  <span>
                    And as an&nbsp;
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 250, hide: 400 }}
                      overlay={<Tooltip id='graduation'>B.S in Software Engineering expected: <b>May 23, 2020</b></Tooltip>}
                    >
                      <u>upcoming graduate</u>
                    </OverlayTrigger>
                    , I'm looking for a job! If you need a website developer for a full-time position please&nbsp;
                  </span>
                  <Link title='Secondary contact navigation link' to='#contact'>
                    contact me here
                  </Link>
                </Row>
                <Row className='mt-5 d-flex justify-content-center'>
                  (You can learn a little more about some of my projects being worked on below!)
                </Row>
              </Col>
            </div>
          </Container>
        </div>
      );
    }
}

export default About