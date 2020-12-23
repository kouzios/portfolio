import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import '../styles/header.scss'

class Header extends Component {
    render() {
        return (
            <Navbar className='d-flex justify-content-start'>
                <Navbar.Brand>
                    <Link title='Link to bring you to this very page' to=''>
                        <img src="logo.png" alt="Matthew Kouzios" className="brand-logo"/>
                    </Link>
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header;