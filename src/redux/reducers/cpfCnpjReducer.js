import {
  FETCH_CPF_CNPJ,
  RECEIVE_CPF_CNPJ
} from '../actions/actionTypes'

const initialState = {
  data: {},
}

const cpfCnpjReducer = (state = initialState, action) => {
  console.log('reducers - cpfCnpjReducer - action', action)
  switch (action.type) {
    case FETCH_CPF_CNPJ:
      return {
        ...state
      }
    case RECEIVE_CPF_CNPJ:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}

export default cpfCnpjReducer