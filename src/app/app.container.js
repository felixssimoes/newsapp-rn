import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import BlankScreen from 'ui/screens/blank.screen';
import {appStart} from 'store/actions';

export const AppContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(appStart());
  }, []);

  return <BlankScreen />;
};
