import Immutable from 'immutable'
import { normalize, schema } from 'normalizr'
import { ARTICLE } from '../types'

import {logout} from '../../../../static/tool'
const initialState = Immutable.Map()

export default (state, action) => {
	if(!state) state=initialState;
    switch (action&&action.type) {
        case ARTICLE.GET_ARTICLES_LIST_BEGIN:
            return state.set('status', "BEGIN")
        case ARTICLE.GET_ARTICLES_LIST_SUCCESS:
            if(action.payload.code==="10010"){
                return state.set('status', "ERROR").set('data', "token过期啦")
            }
            if(typeof action.payload.data==="undefined"){
                return state.set('status', "SUCCESS").set('data', action.payload.data)
            }
            return action.payload.type!='FAILURE'?state.set('status', "SUCCESS").set('data', action.payload):null
        case ARTICLE.GET_ARTICLES_LIST_FAILURE:
            return state.set('status', "FAILURE").set('data', action.payload.message)
        default:
            return state
    }
}
