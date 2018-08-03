import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {

    render () {
        return (
            <div>
                <div className="container-fluid" id="course-title-header">
                <img src="/asset-v1:B9lab+HLF-12+2018-07+type@asset+block@asset-v1_B9lab_HLF-11_2018-06_type_asset_block_hlf-logo-03-01.png" className="hidden" id="course-image" hidden />
                <div className="container">
                    <div className="row">
                    <h1><span className="provider">B9lab-Certified Hyperledger Fabric Developer Course - July</span></h1>
                    <div className="hidden" style={{display: 'none'}} id="__course_number__">HLF-12</div>
                    </div>
                </div>
                </div>
                <div className="container">
                <div className="row">
                    <nav className="info wrapper-course-material col-md-12" aria-label="Course Material">
                    <div className="course-material">
                        <ol className="tabs course-tabs">
                            <li className="tab">
                                <a className="active">
                                    <Link className="header-nav-link" to='/'>Home</Link>
                                </a>
                            </li>
                            <li className="tab">
                                <Link className="header-nav-link" to='/courses'>Courses</Link>
                            </li>
                        </ol>
                    </div>
                    </nav>
                </div>
                </div>
            </div>
        )
    }

}




export default Header;