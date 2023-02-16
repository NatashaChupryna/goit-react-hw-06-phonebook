import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { ContactsForm, Button, NameInput, NumberInput } from './Form.styled';

export const ContactForm = function () {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    dispatch(
      addContact({
        id: nanoid(),
        name: name,
        number: number,
      })
    );
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <label>
        Name :
        <NameInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Nataliia"
        />
      </label>

      <label>
        Number :
        <NumberInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="+380XXXXXXXXX"
        />
      </label>
      <Button type="submit">Add contact</Button>
    </ContactsForm>
  );
};
