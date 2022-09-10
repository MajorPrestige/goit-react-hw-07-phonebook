import { combineReducers } from '@reduxjs/toolkit';

import items from './items/items-slice';
import error from './error/error-slice';
import loading from './loading/loading-slice';

const list = combineReducers({
  items,
  error,
  loading,
});

export default list;
