import Immutable from 'immutable'
import { normalize, schema } from 'normalizr'
import {DEMO_ADDTEXT,DATA1_BEGIN,DATA1_SUCCESS,DATA1_FAILURE} from '../const'

const initialState = Immutable.Map()
export default (state, action) => {
	if(!state) state=initialState;
  //if(!action) return state;
  switch (action&&action.type) {
    case DEMO_ADDTEXT:
      return state.set('text', action.text);
    case DATA1_BEGIN:
      return state.set('status', "BEGIN")
    case DATA1_SUCCESS:
      const user = new schema.Entity('users');
      const comment = new schema.Entity('comments', {
        commenter: user
      });
      const article = new schema.Entity('articles', { 
        author: user,
        comments: [ comment ]
      });
      const normalizedData = normalize(action.response, article);
      return action.response.type!='FAILURE'?state.set('status', "SUCCESS").set('data', normalizedData):null
    case DATA1_FAILURE:
      return state.set('status', "FAILURE")
    default:
      return state
  }
}