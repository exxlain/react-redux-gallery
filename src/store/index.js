import { createEnhancer } from './middleware'
import configureReducer from '../reducer'
import createStore from './store'

const configureStore = () => {
  const reducer = configureReducer()
  const enhancer = createEnhancer()
  const { persistor, store } = createStore(reducer, enhancer)
  return { persistor, store }
}

export const { store, persistor } = configureStore()
global.store = store
