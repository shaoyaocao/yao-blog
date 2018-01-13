import Immutable from 'immutable'
import { normalize, schema } from 'normalizr'
import { 
    GET_HOME_ARTICLE_LIST_BEGIN, 
    GET_HOME_ARTICLE_LIST_SUCCESS, 
    GET_HOME_ARTICLE_LIST_FAILURE 
} from './type'

const initialState = Immutable.Map()

export default (state, action) => {
    if (!state) state = initialState;
    switch (action && action.type) {
        case GET_HOME_ARTICLE_LIST_BEGIN:
            return state.set('status', "BEGIN")
        case GET_HOME_ARTICLE_LIST_SUCCESS:
            if (typeof action.payload.authtoken === "undefined") {
                return state.set('status', "ERROR").set('msg', action.payload.msg).set('data', action.payload.data)
            }
            return action.payload.type != 'FAILURE' ? state.set('status', "SUCCESS").set('data', action.payload) : null
        case GET_HOME_ARTICLE_LIST_FAILURE:
            return state.set('status', "FAILURE")
        default:
            return state
    }
}
