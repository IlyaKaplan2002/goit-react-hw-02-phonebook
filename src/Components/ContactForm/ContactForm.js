import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import ContactFormStyled from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  nameId = uuid();
  numberId = uuid();

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.number) {
      this.props.onSubmit({
        name: e.target.elements.name.value,
        number: e.target.elements.number.value,
      });
    } else this.props.onSubmit(this.state);

    e.target.reset();
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <ContactFormStyled>
        <form name="contact" onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>Name</label>
          <input
            id={this.nameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <label htmlFor={this.numberId}>Number</label>
          <input
            id={this.numberId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />

          <button type="submit">Add contact</button>
        </form>
      </ContactFormStyled>
    );
  }
}

export default ContactForm;
