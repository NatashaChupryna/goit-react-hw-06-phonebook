import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { List, Button, Item } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)
const dispatch = useDispatch();


const filteredContacts = (contacts, filter) => {
 return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()))
}

const visibleContacts = filteredContacts(contacts, filter)


  return (
    <List>
      {visibleContacts.map(contact => {
        return (
          <Item key={nanoid()}>
            <span>{contact.name} : </span>
            <span>{contact.number}</span>
            <Button onClick={() => dispatch(deleteContact(contact.id))}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};

// export const ContactList = ({ contacts, onDelete}) => {
//   return (
//     <List>
//       {contacts.map(contact => {
//         return (
//           <Item key={nanoid()}>
//             <span>{contact.name} : </span>
//             <span>{contact.number}</span>
//             <Button onClick={() => onDelete(contact.id)}>Delete</Button>
//           </Item>
//         );
//       })}
//     </List>
//   );
// };