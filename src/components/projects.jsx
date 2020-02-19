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
  <div className='projects'>
    <Container>
      <div>
        <Col>
          <Row className='d-flex justify-content-center'>
              <h1 className='title centered-text'>Projects!</h1>
          </Row>
          {projects.map((project) => (
             <div className='sub-section'>
                <Row className='d-flex justify-content-center'>
                <h5>
                    <a href={project.github}>{project.title}</a>
                </h5>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <img src={project.image} alt={project.title + ' gif'}/>
                </Row>
                <Row className='d-flex justify-content-center'>
                    <span className='description'>{project.description}</span>
                </Row>
                <hr/>
             </div>
          ))}
        </Col>
      </div>
    </Container>
  </div>
);
export default Projects