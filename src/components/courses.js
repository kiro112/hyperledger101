import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './../styles/course.css';


import Sidenav from './sidenav';
import routes from './routes';



class Courses extends Component {

    render () {
        return (

            <div class="container">
                <div class="row">
                    <div class="course-wrapper">
                        <Sidenav />
    
                        <section className="col-md-9 no-left-pad">
                            <div className="course-content" id="course-content">

                                <div className="xblock xblock-student_view xblock-student_view-vertical" data-runtime-class="LmsRuntime" data-init="VerticalStudentView" data-course-id="course-v1:B9lab+HLF-12+2018-07" data-request-token="f6d255c288ce11e8be100a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@vertical+block@e2cbc8eaab5d4ebb86550ae9deb75169" data-block-type="vertical">
                                    <div className="vert-mod">
                                    <div className="vert vert-0" data-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@4041084103aa4346b56ebf2e449bc634">
                                        <div className="xblock xblock-student_view xblock-student_view-html xmodule_display xmodule_HtmlModule" data-runtime-class="LmsRuntime" data-init="XBlockToXModuleShim" data-block-type="html" data-request-token="f6d255c288ce11e8be100a059cba8688" data-runtime-version={1} data-usage-id="block-v1:B9lab+HLF-12+2018-07+type@html+block@4041084103aa4346b56ebf2e449bc634" data-type="HTMLModule" data-course-id="course-v1:B9lab+HLF-12+2018-07">

                                            {routes.map((route, i) => (
                                                route.menus.map((menu, i) => {
                                                    return (
                                                        <Route exact={ menu.exact ? menu.exact : '' } path={ menu.to } component={ menu.component } />
                                                    )
                                                })
                                            ))}

                                        </div>
                                    </div>
                                    </div>
                                </div>                                

                            </div>
                        </section>

                    </div>
                </div>
            </div>

            // <Container>
            //     <Row>
            //         <Col md={3} className="bordered padTopAndBot-15px">
            //             <ol>
            //                 {
                                // routes.map((route, i) => {
                                //     return (
                                //         <li>
                                //             <h4>{ route.module }</h4>
                                //             <ul>
                                //                 {
                                //                     route.menus.map((menu, i) => {
                                //                         return (
                                //                             <li>
                                //                                 <Link to={ menu.to }>{ menu.label }</Link>
                                //                             </li>
                                //                         )
                                //                     })
                                //                 }
                                //             </ul>
                                //         </li>
                                //     )
                                // })
            //                 }
            //             </ol>

            //         </Col>

            //         <Col md={9} className="bordered padTopAndBot-15px" >
            //             <Switch>
                            
            //             </Switch>
            //         </Col>
            //     </Row>
            // </Container>
        );
    }
}

export default Courses;