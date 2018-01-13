import React, { Component } from 'react';
import {Box} from '../controllers/Box'
import PageHeader from '../controllers/PageHeader'
import { connect } from 'react-redux'
import {getArticles} from './redux/actions/article'

const mapStateToProps = (state) => {
  return {
    data: state.get('article').get('data'),
    status: state.get('article').get('status'),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: (variables) => {
        return  dispatch(getArticles(variables))
    },
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Article extends Component {
    state = {  }
    componentDidMount(){
      let {getArticles} = this.props;
      this.props.getArticles({
        pageSize:10,pageIndex:1
      }).then(() => {
        console.log(this.props)
      })
    }
    render() {
        return (
            <div>
                <PageHeader pageName="文章列表" parentName="博客管理" />

            </div>
        );
    }
}

export default Article;
