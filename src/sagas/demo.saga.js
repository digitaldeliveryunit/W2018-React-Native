import { call, put, takeLatest } from "redux-saga/effects";
import { DEMO_REQUESTED, DEMO_FULFILLED, DEMO_REJECTED } from "../actions";
import request from "../helpers/request.helper";

function* requestDemo() {
  try {
    const post = yield call(
      request.get.bind(request),
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    yield put({ type: DEMO_FULFILLED, post: post });
  } catch (e) {
    yield put({ type: DEMO_REJECTED });
  }
}

export function* watchDemoSagasAsync() {
  yield [takeLatest(DEMO_REQUESTED, requestDemo)];
}
