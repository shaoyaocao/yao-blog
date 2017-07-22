/*react-router-redux 的reducer，Immutable形式得自定义，不能使用官方提供的reducer*/
import Immutable from 'immutable'
import {LOCATION_CHANGE} from '../const'

export default (state = Immutable.fromJS({locationBeforeTransitions: null}), { type, payload } = {})=>{
  if (type === LOCATION_CHANGE) {
    return state.merge({locationBeforeTransitions: payload})
  }
  return state
}