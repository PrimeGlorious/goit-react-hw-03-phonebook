import { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  };

  onDeleteBtn = contactId => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({id}) => id !== contactId)
      }
    })
  }

  filteredContacts = () => {
    return this.state.contacts.filter(({name}) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  addContact = (name, number) => {
    const names = this.state.contacts.map(contact => contact.name);
    if (!names.includes(name)) {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              id: nanoid(),
              name,
              number,
            },
          ],
        };
      });
    } else {
      alert(`${name} is already in contacts.`);
    };
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact}/>

        <h2>Contacts</h2>
        <Filter onInputChange={this.onInputChange} filter={this.state.filter} />
        {this.state.contacts.length > 0 &&
          <ContactList filteredContacts={this.filteredContacts} onDeleteBtn={this.onDeleteBtn}
        />}
      </div>
    )
  };
};
