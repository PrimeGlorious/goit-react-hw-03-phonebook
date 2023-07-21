import { Component } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({contacts: savedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      const savedContacts = JSON.stringify(this.state.contacts)
      localStorage.setItem('contacts', savedContacts)
    }
  }

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
