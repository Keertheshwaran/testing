// src/actions/CounterActions.js
import dispatcher from '../dispatcher';

export const increment = () => {
  dispatcher.dispatch({
    type: 'INCREMENT'
  });
};

export const decrement = () => {
  dispatcher.dispatch({
    type: 'DECREMENT'
  });
};

export const onInputChange = () => {
  dispatcher.dispatch({
    type: 'CHANGETEXT'
  });
};
