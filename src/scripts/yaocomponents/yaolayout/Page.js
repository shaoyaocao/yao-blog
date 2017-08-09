import React, { Component } from 'react';
import { Link } from 'react-router'
import './Page.scss'
class Page extends Component {
    state = {  }
    render() {
        return (
            <div className="col-xs-12 page">
                <div className="info-thumb">
                    <img className="info-img" src={typeof this.props.img != "undefined" ? this.props.img : "./assets/img/default.jpg"} />
                </div>
                <div className="info-content">
                    <div className="info-title">标题:</div>
                    <div className="info-intro">内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内
                        容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介
                        :内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内容简介:内
                        容简介:内容简介:内容简介:内容简介:内容:</div>
                    <div className="info-count">
                        <span className="info-date"><i className="fa fa-clock-o"></i>1970-12-12 12:12:12</span>
                        <span className="info-into"><Link to={this.props.url||'/'}><i className="fa fa-book"></i>开始阅读</Link></span>
                        <span className="info-read"><i className="fa fa-eye"></i>0</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;