import React, { Component } from 'react';

import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
  
`;

const DeleteButton = styled.button`
  background-color: #ff4f4f;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d83535;
  }
`;
class ContactListItem extends Component {
  render() {
    const {  contact, number, onDeleteContact } = this.props;

    return (
      <ListItem>
        {contact}: {number}
        <DeleteButton onClick={() => onDeleteContact(contact)}>Delete</DeleteButton>
      </ListItem>
    );
  }
}

export default ContactListItem;
