import axios from "axios";
import { FETCH_COIN_DATA } from "../utils/ActionTypes";
import { apiBaseURL } from "../utils/Contants";

export default function FetchCoinData() {
  return dispatch => {
    dispatch({
      type: FETCH_COIN_DATA,
      payload: axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)
    });
  };
}
