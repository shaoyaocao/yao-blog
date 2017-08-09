import React, { Component } from 'react';
import './Header.scss'
class Header extends Component {
    state = {  }
    render() {
        return (
            <nav className="navbar navbar-default navbar-yao">
                <div className="navbar-logo" />
                <div className="container">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#">芍药草的博客</a></li>
                            <li><a href="#">测试内容</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;