import { combineReducers } from 'redux';

export const userReducer = (state = [], action) => {
  if (action.type === 'GET_USERS') {
    return [...state, action.payload];
  }
  return state;
};

export default combineReducers({
  userReducer,
});
