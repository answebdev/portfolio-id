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
        style={{ marginRight: '5px' }}
      >
        <i className='fas fa-arrow-left'></i>&nbsp;BACK
      </button>
    </div>
  );
};

export default BackButton;
