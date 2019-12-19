import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import HomeScreen from 'ui/screens/home/home.screen';
import {appStart} from 'store/actions';

export const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appStart());
  }, []);

  return <HomeScreen />;
};
