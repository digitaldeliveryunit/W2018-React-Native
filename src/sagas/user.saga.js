import { call, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import { 
  LOAD_CURRENT_USER,
  LOADING_CURRENT_USER,
  LOAD_CURRENT_USER_FULFILLED,
  LOAD_CURRENT_USER_REJECTED
 } from "../actions/user.action";
import UserAPI from "../api/user";

function* loadCurrentUser() {
  try {
    yield put({ type: LOADING_CURRENT_USER });
    yield call(delay, 3000);
    const currentUser = yield call(UserAPI.getCurrentUser);
    yield put({ type: LOAD_CURRENT_USER_FULFILLED, currentUser });
  } catch (e) {
    console.log(e);
    yield put({ type: LOAD_CURRENT_USER_REJECTED });
  }
}

export function* watchGetCurrentUserAsync() {
  yield [takeLatest(LOAD_CURRENT_USER, loadCurrentUser)];
}
