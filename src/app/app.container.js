import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomeScreen from 'config/routes/main.route';
import { appStart } from 'store/actions';

export const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appStart());
  }, [dispatch]);

  return <HomeScreen />;
};
