import {createStore} from 'redux';
import rootReducer from './reducers/index';

const initialState = {};
const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//dev only
window.store = store;

export default store;