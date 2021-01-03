import React from 'react';
import 'lazysizes';

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
      display: "telegram_man.webm",
      display_type: "video",
    },
    {
      title: "Two Blue",
      github: "https://github.com/kouzios/2blue",
      description: "This is a Magic: The Gathering deck building and virtual play website, built for assisting in your online games between friends and family.",
      display: "twoblue.png",
      display_type: "image",
      link: "https://www.twoblue.live"
    },
    {
      title: "Discord Meeting Scheduler Bot",
      github: "https://github.com/kouzios/mtg-card-extention",
      description: "This is a discord bot that enables you to schedule weekly meetings at a specified time!",
      display: "discord_schedule.webm",
      display_type: "video",
    },
    {
      title: "Google Chrome MTG Extension",
      github: "https://github.com/kouzios/telegram-man-page-bot",
      description: "This is a Google Chrome extension acting as a notepad to quickly store Magic The Gathering cards for deck building with a simple right mouse click action!",
      display: "extension.jpg",
      display_type: "image",
    },
  ];

const Projects = () => (
  <Container className='projects'>
    <div>
      <Col>
        <Row className='d-flex justify-content-center'>
            <h1 className='title centered-text'>Projects</h1>
        </Row>
        {projects.map((project, index) => (
          <div key={"sub-section" + index} className='sub-section'>
            <Row className='mb-2 d-flex justify-content-center'>
              <h5 className='git'><a href={project.github}>{project.title}</a></h5>
            </Row>
            <Row>
              <Col>
                  {project.display_type === "video" ?
                    <video controls>
                      <source src={project.display} alt={project.title + ' video'} type="video/webm" />
                    </video> 
                      : <img src={project.display} alt={project.title + ' image '} />
                  }
              </Col>
              <Col className='d-flex align-items-center'>
                  <span className='description'>
                    {project.description}
                    {"\n"}
                    {project.link ? <a href={project.link}>See it here</a>: null}
                  </span>
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