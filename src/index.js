import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'


/* COMPONENTS */
import Home from './components/home';
import Header from './components/header';
import Courses from './components/courses';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path="/courses" component={ Courses } />
    </Switch>
  </main>
)


const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)


ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'))
