import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
//import { Switch, Route } from 'react-router'
//import {BrowserRouter} from 'react-router-dom'
import {configureStore,history} from './scripts/common/store'
import {RootRouter} from './scripts/components/router'


const store=configureStore()
const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <RootRouter history={history} />
    </Provider>,
    document.getElementById('app')
  )
}
render()
