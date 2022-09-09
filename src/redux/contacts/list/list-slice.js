import { createSlice } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  deleteContact,
  checkContacts,
  deleteCheckedContacts,
} from './list-operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const itemsSlice = createSlice({
  name: 'list',
  initialState,
  extraReducers: {
    [getContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [getContacts.fulfilled]: (store, { payload }) => {
      store.items = payload;
      store.loading = false;
    },

    [getContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [addContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [addContact.fulfilled]: (store, { payload }) => {
      store.items.unshift(payload);
      store.loading = false;
    },

    [addContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [deleteContact.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [deleteContact.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(({ id }) => id !== payload);
      store.loading = false;
    },

    [deleteContact.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [checkContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [checkContacts.fulfilled]: (store, { payload }) => {
      const checkedContact = store.items.find(({ id }) => id === payload);
      checkedContact.checked = !checkedContact.checked;
      store.loading = false;
    },

    [checkContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [deleteCheckedContacts.pending]: store => {
      store.loading = true;
      store.error = null;
    },

    [deleteCheckedContacts.fulfilled]: (store, { payload }) => {
      store.items = store.items.filter(el => !payload.includes(el.id));
      store.loading = false;
    },

    [deleteCheckedContacts.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default itemsSlice.reducer;
