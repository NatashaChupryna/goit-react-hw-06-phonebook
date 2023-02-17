import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = [{id: 1, name: 'Bradd Pitt', number: 232-34-56}];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      //////////////////////////////
      // не працює перевірка
      const name = action.payload.name;
      const number = action.payload.number;
      console.log(name);

      if (
        state.includes(
          contact => contact.name === name && contact.number === number
        )
      ) {
        return toast(
          `Uuum, the contact with name ${name} and phone number ${number} is already in the list`
        );
      }
      //////////////////////////////
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        contact => contact.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
