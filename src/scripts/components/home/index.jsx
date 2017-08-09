import React, { Component } from 'react';
import {
    Header,
    Content,
    Footer,
    Page,
    Board
} from '../../yaocomponents/yaolayout'
import {Box,Row,Col} from '../controllers/Box'
import { connect } from 'react-redux'
import { getActicle } from './redux/action'
import './index.scss'

const mapStateToProps = (state) => {
    return {
        data: state.get('articles').get('data'),
        status: state.get('articles').get('status')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActicle: (value) => {
            return dispatch(getActicle(value))
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    state = {
        article:{
            pageSize: 10,
            pageIndex: 1
        }
      }
    componentWillMount() {
        var userAgent = navigator.userAgent;  // 取得浏览器的 userAgent 字符串
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !userAgent.indexOf("Opera") > -1) {
            alert("该站的作者检测到你用的是狗屁IE浏览器所以作者拒绝了你并把你T了出去");
            history.go(-1)
        }
        this.props.data || this.props.getActicle(this.state.article)
    }
    componentDidMount() {
        $('body').addClass(" blog-home")
    }
    componentWillUnmount() {
        $('body').removeClass(" blog-home")
    }
    render() {
        return (
            <div>
                <Header/>
                <Content>
                    <Row>
                        <Col xs={8} >
                         {typeof this.props.data != "undefined"?
                                this.props.data.articles.list.map((item,index)=>{
                                return <Page key={index} data={item} url={"read/"+item._id}/>
                            }) 
                        :null}
                        </Col>
                        <Col xs={4}>
                             <Board></Board> 
                        </Col>
                    </Row>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default Home;