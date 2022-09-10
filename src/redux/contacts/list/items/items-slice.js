import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  checkContacts,
  deleteCheckedContacts,
} from './list-operations';

const items = createSlice({
  name: 'items',
  initialState: [],
  extraReducers: {
    [getContacts.fulfilled]: (_, { payload }) => payload,
    [addContact.fulfilled]: (store, { payload }) => store.unshift(payload),
    [deleteContact.fulfilled]: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
    [checkContacts.fulfilled]: (store, { payload }) => {
      const checkedContact = store.find(({ id }) => id === payload);
      checkedContact.checked = !checkedContact.checked;
    },
    [deleteCheckedContacts.fulfilled]: (store, { payload }) =>
      store.filter(el => !payload.includes(el.id)),
  },
});

export default items.reducer;
