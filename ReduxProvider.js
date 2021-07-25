import thunk from 'redux-thunk';
import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './src/redux/reducers';

const middleware = [thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

function ReduxProvider(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default ReduxProvider;
