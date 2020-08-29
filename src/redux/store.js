import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk'

import rootReducer from './reducers/rootReducer'
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(Thunk)
    // other store enhancers if any
))

export default store