import { combineReducers } from 'redux'

import zipCodeInfoReducer from './zipCodeInfoReducer'
import cpfCnpjReducer from './cpfCnpjReducer'

const rootReducer = combineReducers({
  zipCodeInfoReducer,
  cpfCnpjReducer,
})

export default rootReducer