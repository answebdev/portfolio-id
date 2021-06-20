import React, { Component } from 'react';
import classes from '../../styles/FooterAlt.module.css';

class FooterAlt extends Component {
  render() {
    return (
      <div>
        <div className={classes.Footer} id='footer'>
          <span className={classes.FooterText}>
            &copy; Copyright 2021 Adolf Schmuck | adolf.schmuck@gmail.com
          </span>
        </div>
      </div>
    );
  }
}

export default FooterAlt;
