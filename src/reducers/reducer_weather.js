import {FETCH_WEATHER} from '../actions/index';
export default function(state=[], action= null) {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
  }

  return state;
}