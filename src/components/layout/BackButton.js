import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from '../../styles/BackButton.module.css';

const BackButton = () => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => history.goBack()}
        className={classes.BackBtn}
        variant='primary'
      >
        <i className='fas fa-arrow-left'></i>&nbsp;Back
      </button>
    </div>
  );
};

export default BackButton;
