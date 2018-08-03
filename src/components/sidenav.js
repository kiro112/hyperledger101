import React, { Component } from 'react';
import { Route, Switch, Link, HashRouter } from 'react-router-dom'
import { Accordion, AccordionItem } from 'react-sanfona';


import routes from './routes';


class Sidenav extends Component {

    constructor () {
        super();
        this.routes = routes;
    }

    render () {
        return (
            <div className="col-md-3 no-right-pad">
                <div className="course-index">
                    <div className="wrapper-course-modes" />
                        <div className="accordion" >
                            <nav className="course-navigation" aria-label="Course">
                                <Accordion>
                                    {routes.map((route, item) => {
                                        return (
                                            <AccordionItem title={ route.module } className="button-chapter chapter">
                                                <div>
                                                    {
                                                        route.menus.map((menu, i) => {
                                                            return (
                                                                <div className="menu-item active">
                                                                    <Link to={ menu.to }>{ menu.label }</Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </AccordionItem>
                                        )
                                    })}
                                </Accordion>                                
                            </nav>
                        </div>
                </div>
            </div>
        );
    }

}


export default Sidenav;