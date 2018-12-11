import { 
  LOADING_CURRENT_USER,
  LOAD_CURRENT_USER_FULFILLED,
  LOAD_CURRENT_USER_REJECTED
} from "../actions/user.action";

const initState = {
  currentUser: {},
  loading: false,
  loaded: false,
  loadFailed: false
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case LOADING_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: {},
        loading: true,
        loaded: false,
        loadFailed: false
      });
    case LOAD_CURRENT_USER_FULFILLED:
      // TODO 03
    case LOAD_CURRENT_USER_REJECTED:
      return Object.assign({}, state, {
        currentUser: {},
        loading: false,
        loaded: false,
        loadFailed: true
      });
    default:
      return state;
  }
}
