import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem } from 'react-sanfona';

import './../styles/sidenav.css'


import routes from './routes';


class Sidenav extends Component {

    constructor () {
        super();
        this.routes = routes;
    }

    isActiveMenu = (to) => {
        let activeMenu = window.location.hash.replace('#', '');
        return activeMenu === to;
    }

    render () {
        return (
            <div className="col-md-3 no-right-pad">
                <div className="course-index">
                    <div className="wrapper-course-modes">
                        <div className="accordion" >
                            <nav className="course-navigation" aria-label="Course">
                                <Accordion>
                                    {routes.map((route, item) => {
                                        return (
                                            <AccordionItem title={ route.module } key={item.toString()} className="button-chapter chapter">
                                                <div>
                                                    {
                                                        route.menus.map((menu, i) => {
                                                            return (
                                                                <div className="menu-item" key={i.toString()} >
                                                                    <Link to={ menu.to } className={ this.isActiveMenu(menu.to) ? ' active-menuItem' : '' }>{ menu.label }</Link>
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
            </div>
        );
    }

}


export default Sidenav;