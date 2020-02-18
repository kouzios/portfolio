import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../styles/projects.scss'

class Projects extends Component {
    render() {
      return (
        <div id='projects'>
          <Container>
            <div>
              <Col>
                <Row className='d-flex justify-content-center'>
                  <h1 className='title centered-text'>Projects!</h1>
                </Row>
                <div className='sub-section'>
                  <Row className='d-flex justify-content-center'>
                    <h5>
                      <a href="https://github.com/kouzios/telegram-man-page-bot">Telegram Manual Page Bot</a>
                    </h5>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <img src='telegram_man.gif' alt='Telegram manual page bot gif'/>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <span className='description'>This is a bot dedicated to getting results from the Linux `man` command, all in your telegram chat!</span>
                  </Row>
                </div>
                <hr/>
                <div className='sub-section'>
                  <Row className='d-flex justify-content-center'>
                    <h5>
                      <a href="https://github.com/kouzios/mtg-card-extention">Discord Meeting Scheduler Bot</a>
                    </h5>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <img src='discord_schedule.gif' alt='Discord scheduling bot gif'/>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <span className='description'>This is a discord bot that enables you to schedule weekly meetings at a specified time!</span>
                  </Row>
                </div>
                <div className='sub-section'>
                  <Row className='d-flex justify-content-center'>
                    <h5>
                      <a href="https://github.com/kouzios/telegram-man-page-bot">Google Chrome MTG Extension</a>
                    </h5>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <img src='extension.png' alt='Magic The Gathering card adding extension'/>
                  </Row>
                  <Row className='d-flex justify-content-center'>
                    <span className='description'>This is a Google Chrome extension acting as a notepad to quickly store Magic The Gathering cards for deck building with a simple right mouse click action!</span>
                  </Row>
                </div>
              </Col>
            </div>
          </Container>
        </div>
      );
    }
}

export default Projects