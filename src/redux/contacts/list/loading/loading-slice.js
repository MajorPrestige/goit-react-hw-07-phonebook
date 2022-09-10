import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
  checkContacts,
  deleteCheckedContacts,
} from '../list-operations';

const loading = createSlice({
  name: 'loading',
  initialState: false,
  extraReducers: {
    [getContacts.pending]: () => true,
    [getContacts.fulfilled]: () => false,
    [getContacts.rejected]: () => false,

    [addContact.pending]: () => true,
    [addContact.fulfilled]: () => false,
    [addContact.rejected]: () => false,

    [deleteContact.pending]: () => true,
    [deleteContact.fulfilled]: () => false,
    [deleteContact.rejected]: () => false,

    [checkContacts.pending]: () => true,
    [checkContacts.fulfilled]: () => false,
    [checkContacts.rejected]: () => false,

    [deleteCheckedContacts.pending]: () => true,
    [deleteCheckedContacts.fulfilled]: () => false,
    [deleteCheckedContacts.rejected]: () => false,
  },
});

export default loading.reducer;
