import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (aciton.type) {
  case FETCH_WEATHER:
    // we want to return a new instance of state, and not mutate our state
    return [ action.payload.data, ...state ]; // instead of 'return state.concat([action.payload.data]);'
  }
  return state;
}