import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../styles/header.scss'

class Header extends Component {
    render() {
        return (
            <Navbar className='d-flex justify-content-around'>
                <Navbar.Brand>
                    <Link to=''>
                        <img src="logo-96x96.png" alt="Matthew Kouzios" className="brand-logo"/>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Link to='#about'>About Me</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='#projects'>My Projects</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='#contact'>Contact Me!</Link>
                    </Nav.Item>

                </Nav>
            </Navbar>
        )
    }
}

export default Header;