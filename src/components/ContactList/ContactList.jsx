import React from 'react';

import PropTypes from 'prop-types'

import styles from './ContactList.module.css'

function ContactList({contacts, onDeleteContacts}) {
    const contactElements = contacts.map(({id, name, number}, idx) => (
      <li key ={id} >
        <span className ={styles.list}>{name}</span> : <span>{number}</span>
        <button className={styles.btn} onClick={()=> onDeleteContacts(idx)}>Delete</button>
      </li>
    ))
        
    return (
        <ul>
            {contactElements}
        </ul>
    )
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContacts: PropTypes.func.isRequired,
  };
  
