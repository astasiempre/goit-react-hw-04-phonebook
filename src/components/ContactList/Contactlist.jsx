import React, { Component } from 'react';
import ContactListItem from './ContactListItem';

import styled from 'styled-components';

const List = styled.ul`
  padding: 10px;
  margin: 5px 0;
  
`;
class ContactList extends Component {
  render() {
    const { contacts, filter, onDeleteContact } = this.props;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <List>
        {filteredContacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    );
  }
}

export default ContactList;
