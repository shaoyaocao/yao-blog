//import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux-immutablejs';
import router from '../components/router/reducer';
import login from '../components/login/redux/reducer';
import main from '../components/views/redux/reducers/main';

const reducers = combineReducers({
  router:routerReducer,
  login,
  main
})

export default reducers
