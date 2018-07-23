import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Container, Row, Col } from 'reactstrap';

import logo from 'assets/edx-b9lab-theme/images/b9lab-academy-logo.1e555680be8e.svg';

import '../styles/header.css'

class Header extends Component {

    render () {
        return (
            <header>
                <div className="header-container" >
                    <Container className="header-grid" >
                        <Row>
                            <Col>
                                <img src={ logo } className="header-logo" alt="header-logo" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                
                <Container>
                    <Row>
                        <Col>
                            <h2 className="header-title">B9lab-Certified Hyperledger Fabric Developer Course - July</h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="header-nav-container">
                    <Row>
                        <Col>
                            <ol className="header-nav-ol" >
                                <li className="header-nav-li" >
                                    <Link className="header-nav-link" to='/'>Home</Link>
                                </li>
                                <li className="header-nav-li" >
                                    <Link className="header-nav-link" to='/courses'>Courses</Link>
                                </li>
                                {/* <li><Link to='/schedule'>Schedule</Link></li> */}
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </header>
        )
    }

}




export default Header;