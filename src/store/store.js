import { createStore } from 'redux'
import { persistStore } from 'redux-persist'

const configureStore = (reducer, enhancer, preloadedState = {}) => {
  const store = createStore(reducer, preloadedState, enhancer)
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
