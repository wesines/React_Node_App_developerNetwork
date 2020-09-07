import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
// an action that dispatch
const initialState = [];

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log('action=', action);
  switch (action) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //in this case the payload is the id but it can be anything
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
}
