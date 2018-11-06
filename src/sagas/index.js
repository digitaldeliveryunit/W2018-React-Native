import { all, fork } from "redux-saga/effects";
import { watchDemoSagasAsync } from "./demo.saga";

export default function* sagas() {
  yield all([fork(watchDemoSagasAsync)]);
}
