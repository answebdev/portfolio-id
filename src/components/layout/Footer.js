import React, { Component } from 'react';
import classes from '../../styles/Footer.module.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className={classes.Footer} id='footer'>
          <span className={classes.FooterText}>
            &copy; Copyright 2022 Adolf Schmuck | adolf.schmuck@gmail.com
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
