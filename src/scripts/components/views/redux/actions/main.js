import { CALL_API } from 'redux-api-middleware'

import { MAIN } from '../types'

import api from 'src/scripts/static/api'

function fetchData(value) {
    let query = `
        query getTodos($pageSize:Int,$pageIndex:Int){
            todos(pageSize:$pageSize,pageIndex:$pageIndex){
                index
                size
                pages
                list{
                    _id
                    todo
                    adddate
                    completed
                }
            }
        }
    `;

    let variables = value;
    return {
        [CALL_API]: {
            types: [MAIN.GET_TODOS_LIST_BEGIN,MAIN.GET_TODOS_LIST_SUCCESS,MAIN.GET_TODOS_LIST_FAILURE],
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({query,variables}),
            endpoint: api.graqhql
        }
    }
}

function getTodoList(option) {
  return (dispatch, getState) => {
    return dispatch(fetchData(option))
  }
}
export {
    getTodoList
}