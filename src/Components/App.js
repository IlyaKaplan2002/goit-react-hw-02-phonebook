import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { v4 as uuid } from 'uuid';
import Section from './Section';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onSubmitForm = e => {
    e.preventDefault();

    const id = uuid();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (this.state.contacts.filter(contact => contact.name === name).length > 0) {
      alert(`${name} is already in contacts`);
      e.target.reset();
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));

    e.target.reset();
  };

  deleteItem = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => item.id !== id)],
    }));
  };

  onFilterChange = e => {
    const filter = e.target.value;
    this.setState({ filter: filter.toLowerCase() });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.onSubmitForm} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.onFilterChange} />

          <ContactList onDelete={this.deleteItem} items={this.getFilteredContacts()} />
        </Section>
      </>
    );
  }
}

export default App;
