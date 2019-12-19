import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';
import { AppContainer } from './app.container';

export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
