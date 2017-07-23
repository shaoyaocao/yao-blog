import { CALL_API } from 'redux-api-middleware'

export default store => next => action => {
  const callApi = action[CALL_API]

  // Check if this action is a redux-api-middleware action.
  if (callApi) {
    // Inject the Authorization header from localStorage.
    callApi.headers = Object.assign({}, callApi.headers, {
      Authorization:  "Bearer "+localStorage.getItem("Authorization") || '',
    })
  }

  // Pass the FSA to the next action.
  return next(action)

}