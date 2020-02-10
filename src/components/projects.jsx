import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';

import '../styles/projects.scss'

class Projects extends Component {
    render() {
      return (
        <div id='projects' className='d-flex justify-content-center'>
          <Row>
            <h1>Projecs!</h1>
          </Row>
          <Row>
            <img src='telegram_man.gif' alt='Telegram manual page bot gif'/>
          </Row>
          <Row>
            <img src='discord_schedule.gif' alt='Discord scheduling gif'/>
          </Row>
        </div>
      );
    }
}

export default Projects