import { CALL_API } from 'redux-api-middleware'
import { ARTICLE } from '../types'

import api from 'src/scripts/static/api'

export function getArticles(variables) {
  let query = `
    query getArticles($pageSize:Int,$pageIndex:Int){
      articles(pageSize:$pageSize,pageIndex:$pageIndex){
        index,
        size,
        pages,
        list {
          _id
          article
          adddate
          title
          keyword
          remark
          author
        }
      }
    }
  `
  console.log({query,variables})
  return (dispatch, getState) => {
      return dispatch(
          {
              [CALL_API]: {
                  types: [ARTICLE.GET_ARTICLES_LIST_BEGIN,ARTICLE.GET_ARTICLES_LIST_SUCCESS,ARTICLE.GET_ARTICLES_LIST_FAILURE],
                  method: 'POST',
                  headers:{'Content-Type': 'application/json'},
                  body:JSON.stringify({query,variables}),
                  endpoint: api.graqhql
              }
          }
      );
  }
}
