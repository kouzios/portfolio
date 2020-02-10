import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../styles/contact.scss'

class Contact extends Component {
    render() {
      return (
        <div id='contact'>
          <Container>
            <div>
              <Col>
                <Row className='d-flex justify-content-center'>
                  <h3 className='title centered-text'>Contact Me!</h3>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <span>Email:&nbsp;</span><a title='Mail link to my email' href="mailto:mkouzios@hotmail.com">mkouzios@hotmail.com</a>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <span>Phone:&nbsp;</span><span>(630)881-2184</span>
                </Row>
              </Col>
            </div>
          </Container>
        </div>
      );
    }
}

export default Contact