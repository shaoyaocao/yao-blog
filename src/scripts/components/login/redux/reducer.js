import Immutable from 'immutable'
import { normalize, schema } from 'normalizr'
import {
    LOGIN_USER,
    LOGIN_BEGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './type'

const initialState = Immutable.Map()

export default (state, action) => {
	if(!state) state=initialState;
  switch (action&&action.type) {
    case LOGIN_USER:
        return state.set('data', action.text);
    case LOGIN_BEGIN:
        return state.set('status', "BEGIN")
    case LOGIN_SUCCESS:
        if(typeof action.payload.authtoken==="undefined"){
            return state.set('status', "ERROR").set('data', action.payload.msg)
        }
        return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('data', action.payload):null
    case LOGIN_FAILURE:
        return state.set('status', "FAILURE")
    default:
        return state
  }
}
