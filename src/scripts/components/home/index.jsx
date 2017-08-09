import React, { Component } from 'react';
import {
    Header,
    Content,
    Footer,
    Page,
    Board
} from '../../yaocomponents/yaolayout'
import {Box,Row,Col} from '../controllers/Box'
import { Link } from 'react-router'

import './index.scss'
class Home extends Component {
    state = {  }
    componentWillMount() {
        var userAgent = navigator.userAgent;  // 取得浏览器的 userAgent 字符串
        if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !userAgent.indexOf("Opera") > -1) {
            alert("该站的作者检测到你用的是狗屁一样的IE浏览器所以作者拒绝了你并把你T了出去");
            history.go(-1)
        }
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
                            <Page/>
                            <Page/>
                            <Page/>
                            <Page/>
                            <Page/>
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