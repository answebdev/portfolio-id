import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
// import NavigationAlt from './components/layout/NavigationAlt';
import Footer from './components/layout/Footer';
// import FooterAlt from './components/layout/FooterAlt';
import LandingPage from './components/pages/LandingPage';
import About from './components/pages/About';
import ProjectsOriginal from './components/pages/ProjectsOriginal';
import Portfolio from './components/pages/Portfolio';
import ParticipialAdjectives from './components/pages/ParticipialAdjectives';
import Customer from './components/pages/Customer';
import Orientation from './components/pages/Orientation';
import Netlify from './components/pages/Netlify';
import CanvasModules from './components/pages/CanvasModules';
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
          {/* <NavigationAlt /> */}
          <div className='container'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/projects-original'
                component={ProjectsOriginal}
              />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route
                exact
                path='/portfolio/participial-adjectives'
                component={ParticipialAdjectives}
              />
              <Route
                exact
                path='/portfolio/improving-customer-satisfaction'
                component={Customer}
              />
              <Route
                exact
                path='/portfolio/new-employee-orientation'
                component={Orientation}
              />
              <Route
                exact
                path='/portfolio/using-netlify-to-host-your-web-application'
                component={Netlify}
              />
              <Route
                exact
                path='/portfolio/canvas-modules'
                component={CanvasModules}
              />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/success' component={Success} />
              <Route component={Error} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      <Footer />
      {/* <FooterAlt /> */}
    </div>
  );
};

export default App;
