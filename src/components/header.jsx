import React, { Component } from 'react'

import Navbar from 'react-bootstrap/Navbar';

import '../styles/header.scss'

class Header extends Component {
    render() {
        return (
            <Navbar className='d-flex justify-content-start'>
                <Navbar.Brand>
                    <img src="logo.png" alt="Matthew Kouzios" className="brand-logo"/>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;