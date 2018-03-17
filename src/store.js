import { createStore, combineReducers } from 'redux';
import room from './reducer/room';
import stickyNote from './reducer/stickyNote';

const reducer = combineReducers({ room, stickyNote });
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line
);

export default store;
