import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import Immutable from 'immutable'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import asyn from './middleware/asyn'
import reducers from './reducers'
import DevTools from '../components/devtools'

const history = createHistory()

function configureStore() {
    const routerhistory = routerMiddleware(history)
    const initialState = Immutable.Map()
    const _store=reducers(initialState)
    const store = createStore(
      reducers,
      _store,
      compose(
        applyMiddleware(routerhistory,thunk,asyn,createLogger()),
        DevTools.instrument()
      )
    )

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default
        store.replaceReducer(nextRootReducer)
      })
    }


    /*
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )
    */
    return store
}

export {history,configureStore}
