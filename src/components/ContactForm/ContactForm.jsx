import React, { Component } from 'react';
import { nanoid } from 'nanoid'

import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Span = styled.span`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

class ContactForm extends Component {
 state = {
    name: '',
    number: '',
  };
   

  handleInputChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
    };
    
handleAddContact = () => {
      const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') return;     

  
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(newContact);  
          
    this.setState({
        name: '',
        number: '',
    })
    
  }

  render() {
    return (
      <FormContainer>
        <h2>Phonebook</h2>
        <Label>
          <Span>Name</Span>
          <Input
            onChange={this.handleInputChange}
            value={this.state.name}
            type="text"
            name="name"
            pattern= "^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Span>Number</Span>
          <Input
            onChange={this.handleInputChange}
            value={this.state.number}
            type="tel"
            pattern= "\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            name="number"
            required
          />
        </Label>
        <Button onClick={this.handleAddContact} type="submit">
          Add contact
        </Button>
      </FormContainer>
    );
  }
}

export default ContactForm;