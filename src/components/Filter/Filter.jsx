import React from 'react';

import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

import styles from './Filter.module.css'

function Filter({ value, onChange }) {
  const id = uuidv4();
    return (
        <label htmlFor={id}>
          Finds contacts by name <input
          className = {styles.input} 
          type="text"
          value = {value}
          onChange={onChange}
          id={id}
          />
      
        </label>
    )
};

export default Filter;


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
