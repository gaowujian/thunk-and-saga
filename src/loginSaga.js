import { put, takeEvery, call, all } from "redux-saga/effects";

export function* changeName(value) {
  yield put({ type: "changeName", payload: value });
}
export function* changeAge(value) {
  yield put({ type: "changeAge", payload: value });
}

export function* login(value) {
  const { username, age } = value;
  
  yield put({ type: "changeAge", payload: value });
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([changeName(), changeAge(),login()]);
}
