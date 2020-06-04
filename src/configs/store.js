import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';

// TODO: import REDUCERs here
import rootReducer from '../redux/reducers';

const middleware = [];
if (__DEV__) {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
