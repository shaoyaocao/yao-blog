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

function creatTodo(option){
    let query = `
        mutation createTodoMutation($todo: String!,$uid:String!) {
            createTodo(todo: $todo,uid:$uid) {
                    _id
            }
        }
    `;
    let variables = option;
    return (dispatch, getState) => {
        return dispatch(
            {
                [CALL_API]: {
                    types: [MAIN.ADD_TODOS_BEGIN,MAIN.ADD_TODOS_SUCCESS,MAIN.ADD_TODOS_FAILURE],
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({query,variables}),
                    endpoint: api.graqhql
                }
            }
        );
    }
}

function updateTodo(option){
    let query = `
        mutation updateTodoMutation($_id: String!, $todo: String, $completed: Boolean) {
            updateTodo(_id: $_id, todo: $todo, completed: $completed) {
                    _id
            }
        }
    `;
    let variables = option;
    return (dispatch, getState) => {
        return dispatch(
            {
                [CALL_API]: {
                    types: [MAIN.UPDATE_TODOS_BEGIN,MAIN.UPDATE_TODOS_SUCCESS,MAIN.UPDATE_TODOS_FAILURE],
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({query,variables}),
                    endpoint: api.graqhql
                }
            }
        );
    }
}

function deleteTodo(option){
    let query = `
        mutation removeTodoMutation($_id: String!) {
            removeTodo(_id: $_id) {
                    _id
            }
        }
    `;
    let variables = option;
    return (dispatch, getState) => {
        return dispatch(
            {
                [CALL_API]: {
                    types: [MAIN.DELETE_TODOS_BEGIN,MAIN.DELETE_TODOS_SUCCESS,MAIN.DELETE_TODOS_FAILURE],
                    method: 'POST',
                    headers:{'Content-Type': 'application/json'},
                    body:JSON.stringify({query,variables}),
                    endpoint: api.graqhql
                }
            }
        );
    }
}

export {
    getTodoList,updateTodo,creatTodo,deleteTodo
}