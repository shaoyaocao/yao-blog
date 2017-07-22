//import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux-immutablejs';
import router from '../components/router/reducer';
import demo from '../components/dashboard/reducer';

const reducers = combineReducers({
  router:routerReducer,
  demo
})

export default reducers
