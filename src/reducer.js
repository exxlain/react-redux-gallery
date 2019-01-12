import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import { rootReducer } from './reducers'

const config = {
  key: 'root',
  storage,
  whitelist: ['pictures'],
}

const configureReducer = () => persistReducer(config, rootReducer)

export default configureReducer
