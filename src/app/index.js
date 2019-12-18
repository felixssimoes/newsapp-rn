import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';

import store from '../store';
import {AppContainer} from './app.container';

export default () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
