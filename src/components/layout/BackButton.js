import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import classes from '../../styles/BackButton.module.css';

const BackButton = () => {
  const history = useHistory();
  return (
    <div>
      <button
        onClick={() => history.goBack()}
        className={classes.BackBtn}
        variant='primary'
        href='/projects2/participial-adjectives'
        style={{ marginRight: '5px' }}
      >
        <i className='fas fa-arrow-left'></i>&nbsp;BACK
      </button>
    </div>
  );
};

export default BackButton;
