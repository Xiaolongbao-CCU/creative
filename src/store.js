import {createStore ,combineReducers} from 'redux';
import room from './reducer/room';
import stickyNote from './reducer/stickyNote' ;

let reducer = combineReducers({room,stickyNote});
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;