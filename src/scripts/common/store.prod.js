import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { apiMiddleware } from 'redux-api-middleware';
import apiAuthInjector from './middleware/apiAuthInjector'
import reducers from './reducers'


const history = createHistory()

function configureStore() {
  const routerhistory = routerMiddleware(history)
  const initialState = Immutable.Map()
  const _store=reducers(initialState)
  const store = createStore(
    reducers,
    _store,
    compose(
      applyMiddleware(routerhistory,thunk,apiAuthInjector,apiMiddleware),
    )
  )
  return store
}

export {history,configureStore}
