import * as ActionTypes from "./actionTypes";
import axios from "axios";

export function getBoards() {
  return {
    type: ActionTypes.GET_ALL_BOARDS,
    payload: axios.get("/api/boards")
  };
}

export function getBoard(identifier) {
  return {
    type: ActionTypes.GET_BOARD,
    payload: axios.get(`/api/boards/${identifier}`)
  };
}
