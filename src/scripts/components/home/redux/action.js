import { CALL_API } from 'redux-api-middleware'
import api from 'src/scripts/static/api'
import {
    GET_HOME_ARTICLE_LIST_BEGIN,
    GET_HOME_ARTICLE_LIST_SUCCESS,
    GET_HOME_ARTICLE_LIST_FAILURE
} from './type'

function fetchData(value) {
    let query = `
        query getArticles($pageSize:Int,$pageIndex:Int){
            articles(pageSize:$pageSize,pageIndex:$pageIndex){
                size
                index
                total
                pages
                list{
                    _id
                    title
                    article
                    adddate
                }
            }
        }
    `;
    let variables = value;
    return {
        [CALL_API]: {
            types: [GET_HOME_ARTICLE_LIST_BEGIN, GET_HOME_ARTICLE_LIST_SUCCESS, GET_HOME_ARTICLE_LIST_FAILURE],
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables }),
            endpoint: api.open
        }
    }
}

function getActicle(value) {
    return (dispatch, getState) => {
        return dispatch(fetchData(value))
    }
}

export { getActicle }