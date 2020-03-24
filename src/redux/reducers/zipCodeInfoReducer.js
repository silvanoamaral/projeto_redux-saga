import {
  FETCH_ZIPCODE,
  RECEIVE_ZIPCODE
} from '../actions/actionTypes'

const initialState = {
  zipcode: {},
}

const zipCodeInfoReducer = (state = initialState, action) => {
  console.log('reducers - action', action)
  switch (action.type) {
    case FETCH_ZIPCODE:
      return {
        ...state
      }
    case RECEIVE_ZIPCODE:
      return {
        ...state,
        zipcode: action.payload
      }
    case 'RECEIVE_ZIPCODE_FAILED':
      return {
        ...state
      }
    default:
      return state
  }
}

export default zipCodeInfoReducer