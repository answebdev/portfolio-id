import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import ProjectsOriginal from './components/pages/ProjectsOriginal';
import Projects from './components/pages/Projects';

import ParticipialAdjectives from './components/pages/ParticipialAdjectives';
import Contact from './components/pages/Contact';
import Success from './components/pages/Success';
import Error from './components/pages/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          <Navigation />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/projects-original'
                component={ProjectsOriginal}
              />
              <Route exact path='/projects' component={Projects} />

              <Route
                exact
                path='/projects2/participial-adjectives'
                component={ParticipialAdjectives}
              />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/success' component={Success} />
              <Route component={Error} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
