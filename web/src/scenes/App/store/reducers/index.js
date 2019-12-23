import * as fromEvents from './events';
import * as fromGlobal from './global';

export const initialState = {
  global: fromGlobal.initialState,
  events: fromEvents.initialState
};

export const reducer = ({ global, events }, action) => {
  return {
    global: fromGlobal.reducer(global, action),
    events: fromEvents.reducer(events, action)
  };
};
