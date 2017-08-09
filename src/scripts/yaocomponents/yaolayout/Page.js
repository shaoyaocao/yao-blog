import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatTimestamp2DateInSecond } from '../../static/tool';
import './Page.scss'
class Page extends Component {
    state = {  }
    render() {
        return (
            <div className="col-xs-12 page">
                <div className="info-thumb">
                    <img className="info-img" src={this.props.data.img||"./assets/img/default.jpg"} />
                </div>
                <div className="info-content">
                    <div className="info-title">{this.props.data.title||":暂无标题:"}</div>
                     <div className="info-intro">{this.props.data.article || ":暂无简介:"}</div> 
                    <div className="info-count">
                        <span className="info-date"><i className="fa fa-clock-o"></i>{formatTimestamp2DateInSecond(this.props.data.adddate) || "1970 - 12 - 12 12:12:12"}</span>
                        <span className="info-read"><i className="fa fa-eye"></i>0</span>
                        <span className="info-into"><Link to={this.props.url || '/'}><i className="fa fa-book"></i>开始阅读</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;