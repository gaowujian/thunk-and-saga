import { put, takeEvery, all } from "redux-saga/effects";
import { ASYNCINCREMENT,INCREMENT } from "./constants";

const delay = ms => new Promise(res => setTimeout(res, ms));

// ...

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: INCREMENT, payload: 15 });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeEvery(ASYNCINCREMENT, incrementAsync);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watchIncrementAsync()]);
}
