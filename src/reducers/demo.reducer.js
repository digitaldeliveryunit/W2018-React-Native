import { DEMO_REQUESTED, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";

const initState = {
  post: {},
  fetching: false,
  fetched: false,
  fetchFailed: false
};

export default function demoReducer(state = initState, action) {
  const { post } = action;
  switch (action.type) {
    case DEMO_REQUESTED:
      return Object.assign({}, state, {
        fetching: true,
        fetched: false,
        fetchFailed: false,
        post: {}
      });
    case DEMO_FULFILLED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: true,
        fetchFailed: false,
        post
      });
    case DEMO_REJECTED:
      return Object.assign({}, state, {
        fetching: false,
        fetched: false,
        fetchFailed: true,
        post: {}
      });
    default:
      return state;
  }
}
