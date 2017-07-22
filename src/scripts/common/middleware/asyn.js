import 'isomorphic-fetch'
import {CALL_API,API_ROOT} from '../const'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint,config) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
  return fetch(fullUrl,config)
    .then(response =>{

      return response.json().then(json => ({ json, response }))
    })
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return json
    })
}


// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  localStorage.setItem('how_lastActionDT', Math.floor(new Date().getTime()/1000));  //记录最action动作的时间，用于自动锁定提供时间依据
  const callAPI = action[CALL_API]  //[CALL_API]: {
                                    //types: [ STARRED_REQUEST, STARRED_SUCCESS, STARRED_FAILURE ],
                                    //endpoint: nextPageUrl,
                                    //schema: Schemas.REPO_ARRAY
                                    //}
  if (typeof callAPI === 'undefined') {
    return next(action) //执行同步action
  }

  let { endpoint,config,payload } = callAPI
  const { types } = callAPI
  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]   
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
  next(actionWith({ type: requestType }))
  return callApi(endpoint,config).then(
    response => next(actionWith({
      response,
      type: successType,
      payload
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
