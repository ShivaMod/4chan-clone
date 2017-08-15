import * as ActionTypes from "./actionTypes";
import axios from "axios";

export function getThread(threadId, boardId) {
  return {
    type: ActionTypes.GET_THREAD,
    payload: axios.get(`/api/threads/${threadId}?board=${boardId}`)
  };
}
