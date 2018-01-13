import { CALL_API } from 'redux-api-middleware'
import {
    LOGIN_USER,
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './type'
import api from 'src/scripts/static/api'


function fetchData(value) {
  return {
    [CALL_API]: {
        types: [LOGIN_BEGIN,LOGIN_SUCCESS,LOGIN_FAILURE],
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(value),
        endpoint: api.auth
    }
  }
}

function login(value) {
  return (dispatch, getState) => {
    return dispatch(fetchData(value))
  }
}

export {test,login}
