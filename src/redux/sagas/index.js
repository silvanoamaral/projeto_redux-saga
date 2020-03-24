import { fork, all } from 'redux-saga/effects'

import { watchfetchZipcode } from './fetchZipcode'
import { watchfetchCpfCnpj } from './fetchCpfCnpj'

export default function* root() {
  yield all([
    fork(watchfetchZipcode),
    fork(watchfetchCpfCnpj),
  ])
}
  