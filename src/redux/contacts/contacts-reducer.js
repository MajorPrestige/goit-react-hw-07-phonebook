import { combineReducers } from '@reduxjs/toolkit';

import list from './list/list-slice';
import filter from './filter/filter-slice';

const contactsReducer = combineReducers({
  list,
  filter,
});

export default contactsReducer;
