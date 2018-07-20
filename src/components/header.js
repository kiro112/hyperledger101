import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Grid, Row, Col, Image } from 'react-bootstrap';

import "@getable/lato"
import logo from 'assets/edx-b9lab-theme/images/b9lab-academy-logo.1e555680be8e.svg';

import '../styles/header.css'

class Header extends Component {

    render () {
        return (
            <header>
                <div className="header-container" >
                    <Grid className="header-grid" >
                        <Row>
                            <Col>
                                <Image className="header-logo" src={ logo } />
                            </Col>
                        </Row>
                    </Grid>
                </div>
                
                <Grid>
                    <Row>
                        <Col>
                            <h2>B9lab-Certified Hyperledger Fabric Developer Course - July</h2>
                        </Col>
                    </Row>
                </Grid>

                <Grid className="header-nav-container">
                    <Row>
                        <Col>
                            <ol className="header-nav-ol" >
                                <li className="header-nav-li" >
                                    <Link className="header-nav-link" to='/'>Home</Link>
                                </li>
                                <li className="header-nav-li" >
                                    <Link className="header-nav-link" to='/roster'>Course</Link>
                                </li>
                                {/* <li><Link to='/schedule'>Schedule</Link></li> */}
                            </ol>
                        </Col>
                    </Row>
                </Grid>
            </header>
        )
    }

}




export default Header;