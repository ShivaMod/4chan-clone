import * as ActionTypes from "../actions/actionTypes";

const defaultState = {
  boards: null,
  pending: false,
  error: null
};

export const boards = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOARDS_PENDING: {
      return { ...state, pending: true };
    }
    case ActionTypes.FETCH_BOARDS_FULFILLED: {
      return { ...state, boards: action.payload.data, pending: false };
    }
    case ActionTypes.FETCH_BOARDS_REJECTED: {
      return { ...state, error: action.payload.response.data.error, pending: false };
    }
    default:
      return state;
  }
};
