import * as ActionTypes from "../actions/actionTypes";
import _ from "lodash";

const defaultState = {
  thread: null,
  pending: true,
  error: null
};

export const threads = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_THREAD_PENDING: {
      // set threads back to null
      const tempState = _.clone(state);
      tempState.thread = null;
      return { ...tempState, pending: true };
    }
    case ActionTypes.GET_THREAD_FULFILLED: {
      return { ...state, thread: action.payload.data, pending: false };
    }
    case ActionTypes.GET_THREAD_REJECTED: {
      return {
        ...state,
        error: action.payload.response.data,
        pending: false
      };
    }
    default:
      return state;
  }
};
