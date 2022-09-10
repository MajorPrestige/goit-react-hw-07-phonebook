import { createSlice } from '@reduxjs/toolkit';

import {
  getContacts,
  addContact,
  deleteContact,
  checkContacts,
  deleteCheckedContacts,
} from '../list-operations';

const error = createSlice({
  name: 'error',
  initialState: null,
  extraReducers: {
    [getContacts.pending]: () => null,
    [getContacts.rejected]: (_, { payload }) => payload,

    [addContact.pending]: () => null,
    [addContact.rejected]: (_, { payload }) => payload,

    [deleteContact.pending]: () => null,
    [deleteContact.rejected]: (_, { payload }) => payload,

    [checkContacts.pending]: () => null,
    [checkContacts.rejected]: (_, { payload }) => payload,

    [deleteCheckedContacts.pending]: () => null,
    [deleteCheckedContacts.rejected]: (_, { payload }) => payload,
  },
});

export default error.reducer;
