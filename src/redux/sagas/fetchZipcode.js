import {call, put, takeEvery } from 'redux-saga/effects'
import { getZipcodeAPI } from '../../services/zipCode'
import { RECEIVE_ZIPCODE } from '../actions/actionTypes'

//The worker: will handle the action and terminate
function* fetchZipcode(action) {
  console.log('sagas - fetchZipcode',action)
  try {
    const zipcode = yield call(getZipcodeAPI, action.zip)
    console.log('sagas - resultado ',zipcode)
    yield put({ type: RECEIVE_ZIPCODE, payload: zipcode })
  } catch(e) {
    console.log(e)
  }
}

//The watcher: will watch for dispatched actions and fork a worker on every action
export function* watchfetchZipcode(){
  yield takeEvery('FETCH_ZIPCODE', fetchZipcode)
}
