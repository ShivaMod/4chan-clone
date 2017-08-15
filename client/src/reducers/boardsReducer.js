import * as ActionTypes from "../actions/actionTypes";
import _ from "lodash";

const defaultState = {
  boards: null,
  board: null,
  pending: true,
  error: null
};

export const boards = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_BOARDS_PENDING: {
      return { ...state, pending: true };
    }
    case ActionTypes.GET_ALL_BOARDS_FULFILLED: {
      return { ...state, boards: action.payload.data, pending: false };
    }
    case ActionTypes.GET_ALL_BOARDS_REJECTED: {
      return {
        ...state,
        error: action.payload.response.data,
        pending: false
      };
    }
    case ActionTypes.GET_BOARD_PENDING: {
      // set boards back to null
      const tempState = _.clone(state);
      tempState.board = null;
      return { ...tempState, pending: true };
    }
    case ActionTypes.GET_BOARD_FULFILLED: {
      const boardData = _.clone(action.payload.data);
      boardData.threads = _.isEmpty(boardData.threads)
        ? null
        : boardData.threads;
      return { ...state, board: boardData, pending: false };
    }
    case ActionTypes.GET_BOARD_REJECTED: {
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
