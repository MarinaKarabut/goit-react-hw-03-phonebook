import React, { Component } from 'react';

import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

import { v4 as uuidv4 } from 'uuid';

import styles from './Phonebook.module.css';

class Phonebook extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  componentDidMount() {
    const contactsList = JSON.parse(localStorage.getItem('contacts'))
    this.setState({ contacts: contactsList || []})

    }

  componentDidUpdate() {
    const { contacts } = this.state
    const contactsList = JSON.stringify(contacts)
    localStorage.setItem('contacts', contactsList)
  }

  addContacts = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    if (
      contacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      alert(`${newContact.name} is already in contacts!`);
    } else if (contacts.find(({ number }) => number === newContact.number)) {
      alert(`${newContact.number} is already in contacts!`);
    } else {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
    }
  };

  onDeleteContacts = idx => {
    this.setState(({ contacts }) => {
      const newContacts = [...contacts];
      newContacts.splice(idx, 1);
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = ({target}) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (!filter) {
      return contacts
    }

    return contacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter, contacts } = this.state;
    const {
      handleChange,
      addContacts,
      onDeleteContacts,
      getVisibleContacts,
    } = this;

    const visibleContacts = getVisibleContacts();

    return (
      <div className={styles.box}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm onSubmit={addContacts} />
        <h2 className={styles.tittle}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={handleChange} />
        )}
        {(contacts.length >0) ? (
          <ContactList
            contacts={visibleContacts}
            onDeleteContacts={onDeleteContacts}
          />
        ) : (
          <p className={styles.notification}>
            Your phonebook is empty. Please add contact.
          </p>
        )}
      </div>
    );
  }
}

export default Phonebook;
