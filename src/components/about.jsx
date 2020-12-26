import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../styles/about.scss'

class About extends Component {
    render() {
      return (
        <div className='about d-flex justify-content-center align-items-center'>
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
                  I'm a recent graduate from&nbsp;
                  <a target="_blank" title='MSOE homepage' rel="noopener noreferrer" href='https://www.msoe.edu/'>
                    Milwaukee School of Engineering
                  </a>
                </Row>
                <Row className='entry'>
                  I spend my time on Website Development both in personal projects and Internships.
                </Row>
                <Row className='entry'>
                  <span>
                    I'm awaiting conditional employment for a government position, so I'm not currently looking for a job!
                  </span>
                </Row>
                <Row className='mt-2 d-flex justify-content-center'>
                  <form action="https://www.linkedin.com/in/matthew-kouzios/">
                    <Button id="contact" type="submit" title='Contact navigation link'>
                      Contact me here!
                    </Button>
                  </form>
                </Row>
                <Row className='mt-2 d-flex justify-content-center'>
                  You can learn a little more about some of my projects being worked on below!
                </Row>
              </Col>
            </div>
          </Container>
        </div>
      );
    }
}

export default About