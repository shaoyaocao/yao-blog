import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import {demoAction,loadData1Action} from './action'
import Dashboard from './component'

const mapStateToProps = (state) => {
  return {
    name: state.get('demo').get('text')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      dispatch(demoAction(text.refs.txt.value))
    },
    onLoadData1: () => {
      return dispatch(loadData1Action())
      .then((value)=>{
        console.log(value)
      })
    }
  }
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

export default DashboardContainer


