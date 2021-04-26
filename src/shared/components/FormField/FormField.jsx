import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './FormField.module.css'

const FormField = ({ label, ...inputProps }) => {
    const id = uuidv4();
    return (
        <div className="form-group">
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} className={styles.input} {...inputProps} />
        </div>
    )
}
export default FormField;
