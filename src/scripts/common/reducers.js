//import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux-immutablejs';
import router from '../components/router/reducer';
import login from '../components/login/redux/reducer';
import articles from '../components/home/redux/reducer';
import main from '../components/views/redux/reducers/main';
import article from '../components/views/redux/reducers/article';

const reducers = combineReducers({
  router:routerReducer,
  login,
  main,
  articles,
  article
})

export default reducers
