import Immutable from 'immutable'
import { normalize, schema } from 'normalizr'
import { MAIN } from '../types'

import {logout} from '../../../../static/tool'
const initialState = Immutable.Map()

export default (state, action) => {
	if(!state) state=initialState;
    switch (action&&action.type) {
        case MAIN.GET_TODOS_LIST_BEGIN:
            return state.set('status', "BEGIN")
        case MAIN.GET_TODOS_LIST_SUCCESS:
            if(action.payload.code==="10010"){
                setTimeout(function() {
                    logout()
                }, 1000);
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "ERROR").set('data', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('data', action.payload):null
        case MAIN.GET_TODOS_LIST_FAILURE:
            return state.set('status', "FAILURE").set('data', action.payload.message)
        default:
            return state
    }
}
