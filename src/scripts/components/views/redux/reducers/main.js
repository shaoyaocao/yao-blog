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
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('data', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('data', action.payload):null
        case MAIN.GET_TODOS_LIST_FAILURE:
            return state.set('status', "FAILURE").set('data', action.payload.message)

        case MAIN.FILTER_TODOS_BEGIN:
            return state.set('status', "BEGIN")
        case MAIN.FILTER_TODOS_SUCCESS:
            if(action.payload.code==="10010"){
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('data', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('data', {data:{todos:action.payload.data.filtertodos}}):null
        case MAIN.FILTER_TODOS_FAILURE:
            return state.set('status', "FAILURE").set('data', action.payload.message)

        case MAIN.ADD_TODOS_BEGIN:
            return state.set('status', "BEGIN")
        case MAIN.ADD_TODOS_SUCCESS:
            if(action.payload.code==="10010"){
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('todo', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('todo', action.payload):null
        case MAIN.ADD_TODOS_FAILURE:
            return state.set('status', "FAILURE").set('todo', action.payload.message)

        case MAIN.UPDATE_TODOS_BEGIN:
            return state.set('status', "BEGIN")
        case MAIN.UPDATE_TODOS_SUCCESS:
            if(action.payload.code==="10010"){
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('todo', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('todo', action.payload):null
        case MAIN.UPDATE_TODOS_FAILURE:
            return state.set('status', "FAILURE").set('todo', action.payload.message)
            
        case MAIN.DELETE_TODOS_BEGIN:
            return state.set('status', "BEGIN")
        case MAIN.DELETE_TODOS_SUCCESS:
            if(action.payload.code==="10010"){
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('todo', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('todo', action.payload):null
        case MAIN.DELETE_TODOS_FAILURE:
            return state.set('status', "FAILURE").set('todo', action.payload.message)

        case MAIN.GET_MAIN_WEATHER:
            return state.set('weather', action.payload)
        default:
            return state
    }
}
