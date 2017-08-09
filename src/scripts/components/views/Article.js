import React, { Component } from 'react';
import {Box} from '../controllers/Box'
import PageHeader from '../controllers/PageHeader'

class Article extends Component {
    state = {  }
    render() {
        return (
            <div>
                <PageHeader pageName="文章列表" parentName="博客管理" />

            </div>
        );
    }
}

export default Article;