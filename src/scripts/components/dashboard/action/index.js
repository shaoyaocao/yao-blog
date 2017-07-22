import {CALL_API} from 'src/scripts/common/const'
import {DEMO_ADDTEXT,DATA1_BEGIN,DATA1_SUCCESS,DATA1_FAILURE} from '../const'

const demoAction= (text) => {
  return {
    type: DEMO_ADDTEXT,
    text
  }
}

function fetchData1() {
  return {
    [CALL_API]: {
      types: [DATA1_BEGIN,DATA1_SUCCESS,DATA1_FAILURE],
      endpoint: "mock/data1.json"
    }
  }
}

function loadData1Action() {
  return (dispatch, getState) => {
    return dispatch(fetchData1())
  }
}

export {demoAction,loadData1Action}