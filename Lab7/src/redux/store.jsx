import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import peopleReducer from './reducers/peopleReducer';
// import rootReducer from './reducers';

const store = createStore(peopleReducer, applyMiddleware(logger));

export const AppProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
