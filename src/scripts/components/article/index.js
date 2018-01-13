import React, { Component } from 'react';
import {
    Header,
    Content,
    Footer,
    Page,
    Board
} from '../../yaocomponents/yaolayout'
import { Box, Row, Col } from '../controllers/Box'
import './index.scss'

class Index extends Component {
    componentDidMount() {
        $('body').addClass(" blog-home")
    }
    componentWillUnmount() {
        $('body').removeClass(" blog-home")
    }
    render() {
        return (
            <div>
                <Header />
                    <Content>
                        <div>Message {this.props.match.params.id}</div>
                    </Content>
                    
                <Footer />
            </div>

        );
    }
}

export default Index;