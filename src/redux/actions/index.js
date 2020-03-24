import {
  FETCH_ZIPCODE,
  FETCH_CPF_CNPJ,
} from '../actions/actionTypes'

export const fetchZipCode = zip => ({
  type: FETCH_ZIPCODE,
  zip,
})

export const fetchCpfCnpj = data => ({
  type: FETCH_CPF_CNPJ,
  data,
})
