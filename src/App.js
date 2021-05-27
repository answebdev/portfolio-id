import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Fragment>
          {/* <Navigation /> */}
          <div className='container'>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              {/* <Route exact path='/home' component={Home} />
              <Route exact path='/contact' component={ContactForm} /> */}

              {/* <Route exact path='/success' component={Success} /> */}
              {/* <Route component={Error} /> */}
            </Switch>
          </div>
        </Fragment>
      </Router>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
