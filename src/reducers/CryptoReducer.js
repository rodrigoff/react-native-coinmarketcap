import {
  FETCH_COIN_DATA_PENDING,
  FETCH_COIN_DATA_FULFILLED,
  FETCH_COIN_DATA_REJECTED
} from "../utils/ActionTypes";

const defaultState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COIN_DATA_PENDING:
      return { ...state, isFetching: true };

    case FETCH_COIN_DATA_FULFILLED:
      return {
        isFetching: false,
        data: action.payload.data,
        hasError: false,
        errorMessage: null
      };

    case FETCH_COIN_DATA_REJECTED:
      return {
        isFetching: false,
        data: [],
        hasError: true,
        errorMessage: action.payload
      };

    default:
      return state;
  }
}
