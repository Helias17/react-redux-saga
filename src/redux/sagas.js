import {takeEvery, put, call} from 'redux-saga/effects';
import {REQUEST_POSTS, SHOW_LOADER, FETCH_POSTS, HIDE_LOADER} from './types';

// takeEvery - catch actions that
// put - allows to dispatch events to a store

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  yield put({type: SHOW_LOADER, payload: true});
  const payload  = yield call(fetchPosts);
  yield put({type: FETCH_POSTS, payload});
  yield put({type: HIDE_LOADER, payload: false});
}

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  return await response.json();
}