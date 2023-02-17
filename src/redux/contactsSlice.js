import { createSlice } from '@reduxjs/toolkit';


const initialState = [{ id: 1, name: 'Bradd Pitt', number: 232 - 34 - 56 }];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
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
