import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../layout/dev-logo.webp';

// import '../../styles/Navigation.css';

import classes from '../../styles/Navigation.module.css';

const Navigation = ({ title }) => {
  return (
    <Fragment>
      <div className={classes.Navbar}>
        <Link className={classes.Title} to='/'>
          <p className={classes.NavTitle}>
            &nbsp;
            <strong>{title}</strong>
          </p>
        </Link>
        <div className={classes.Links}>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

Navigation.defaultProps = {
  title: 'Adolf Schmuck',
};

export default Navigation;
