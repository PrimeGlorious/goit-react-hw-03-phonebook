import PropTypes from 'prop-types';
import { Component } from 'react';

import { Form, SubmitBtn, FormInput } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  onInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    })
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value
    const number = e.target.elements.number.value

    this.props.addContact(name, number)

    this.setState({
      number: '',
      name: ''
    })
  }
в
  render() {
    return (
      <Form onSubmit={this.onSubmitForm}>
        <label>
          <b>Name</b>
          <br />
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </label>
        <label>
          <b>Number</b>
          <br />
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </label>
        <SubmitBtn type='submit'>Add</SubmitBtn>
      </Form>
    );
  };
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}
