import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import '../styles/projects.scss'

const projects = 
  [
    {
      title: "Telegram Manual Page Bot",
      github: "https://github.com/kouzios/telegram-man-page-bot",
      description: "This is a bot dedicated to getting results from the Linux `man` command, all in your telegram chat!",
      image: "telegram_man.gif"
    },
    {
      title: "Discord Meeting Scheduler Bot",
      github: "https://github.com/kouzios/mtg-card-extention",
      description: "This is a discord bot that enables you to schedule weekly meetings at a specified time!",
      image: "discord_schedule.gif"
    },
    {
      title: "Google Chrome MTG Extension",
      github: "https://github.com/kouzios/telegram-man-page-bot",
      description: "This is a Google Chrome extension acting as a notepad to quickly store Magic The Gathering cards for deck building with a simple right mouse click action!",
      image: "extension.png"
    }
  ];

const Projects = () => (
  <Container className='projects'>
    <div>
      <Col>
        <Row className='d-flex justify-content-center'>
            <h1 className='title centered-text'>Projects!</h1>
        </Row>
        {projects.map((project, index) => (
          <div className='sub-section'>
            <Row className='mb-2 d-flex justify-content-center'>
              <h5><a href={project.github}>{project.title}</a></h5>
            </Row>
            <Row>
              <Col>
                  <img src={project.image} alt={project.title + ' gif'}/>
              </Col>
              <Col className='d-flex align-items-center'>
                  <span className='description'>{project.description}</span>
              </Col>
            </Row>
        {index < (projects.length-1) ? <hr/> : null /*Ensure no bottom-most separation bar*/} 
          </div>
        ))}
      </Col>
    </div>
  </Container>
);
export default Projects