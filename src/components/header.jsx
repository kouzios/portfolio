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
                    <Link title='Link to bring you to this very page' to=''>
                        <img src="logo-96x96.png" alt="Matthew Kouzios" className="brand-logo"/>
                    </Link>
                </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <a title='Jump to About' href='#about'>About Me</a>
                    </Nav.Item>
                    <Nav.Item>
                        <a title='Jump to Projects' href='#projects'>Projects</a>
                    </Nav.Item>
                    <Nav.Item>
                        <a title='Jump to Contact Me' href='#contact'>Contact Me!</a>
                    </Nav.Item>

                </Nav>
            </Navbar>
        )
    }
}

export default Header;