//import dependencies:
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import rootReducer from '../reducers';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware //middleware that logs actions for you
)(createStore) //will return a new 'create store' function that contains all of our new specifications

export default createStoreWithMiddleware(rootReducer);
