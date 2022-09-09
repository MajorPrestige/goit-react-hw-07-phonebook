import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [
  {
    id: '1',
    name: 'Dan',
    number: '123412312351',
    checked: false,
  },
  {
    id: '2',
    name: 'Prestige',
    number: '12312321312',
    checked: false,
  },
];

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addContact: {
      reducer: (store, { payload }) => {
        const duplicateContact = store.find(
          contact => contact.number === payload.number
        );

        if (duplicateContact?.number === payload.number) {
          alert(`Number: ${payload.number} is already in your contacts`);
          return store;
        }

        store.push(payload);
      },

      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),

    checkContact: (store, { payload }) => {
      const checkedContact = store.find(({ id }) => id === payload);
      checkedContact.checked = !checkedContact.checked;
    },

    deleteCheckedContact: (_, { payload }) => payload,
  },
});

export const { addContact, deleteContact, checkContact, deleteCheckedContact } =
  itemsSlice.actions;

export default itemsSlice.reducer;
