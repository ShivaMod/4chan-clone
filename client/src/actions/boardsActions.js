import * as ActionTypes from "./actionTypes";
import axios from 'axios'

export function fetchBoards() {
  return {
    type: ActionTypes.FETCH_BOARDS,
    payload: axios.get('/api/boards')
  }
}
