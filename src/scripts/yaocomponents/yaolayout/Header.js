import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                            <li><Link to="/">芍药草的博客</Link></li>
                            <li><Link to="/test">测试内容</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;