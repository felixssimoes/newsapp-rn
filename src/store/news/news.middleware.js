import appTypes from '../app/app.types';

const loadNewsOnAppStart = () => next => action => {
  const result = next(action);
  if (action.type === appTypes.start) {
    console.log('Will load news');
  }
  return result;
};

export default [loadNewsOnAppStart];
