import {call, put, takeEvery } from 'redux-saga/effects'
import { getCpfCnpjAPI } from '../../services/getCpfCnjp'
import { RECEIVE_CPF_CNPJ, FETCH_CPF_CNPJ } from '../actions/actionTypes'

//The worker: will handle the action and terminate
function* fetchCpfCnpj(action) {
  console.log('sagas - fetchCpfCnpj',action)
  try {
    const data = yield call(getCpfCnpjAPI, action.data)
    console.log('sagas - resultado - fetchCpfCnpj ',data)
    yield put({ type: RECEIVE_CPF_CNPJ, payload: data })
  } catch(e) {
    console.log(e)
  }
}

//The watcher: will watch for dispatched actions and fork a worker on every action
export function* watchfetchCpfCnpj() {
  yield takeEvery(FETCH_CPF_CNPJ, fetchCpfCnpj)
}
