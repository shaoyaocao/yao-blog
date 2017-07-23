import React from 'react'
import { Link } from 'react-router-dom';
//import { Dropdown } from 'react-bootstrap';
import {localStorageSupport,SmoothlyMenu} from 'src/scripts/lib/layout.run'
import option from '../../../static/option.js'
import {logout} from '../../../static/tool.js'
class TopHeader extends React.Component {
    componentDidMount(){
        // Open close right sidebar
        $('.right-sidebar-toggle').on('click', function () {
            //$('#right-sidebar').toggleClass('sidebar-open');
            let first=!$('#right-sidebar').hasClass('bounceInRight')&&!$('#right-sidebar').hasClass('bounceOutRight')
            if(first){
                $('#right-sidebar').addClass('bounceInRight');
                $('#right-sidebar').toggleClass('sidebar-open');
            }
            else
            {
                $('#right-sidebar').toggleClass('bounceOutRight');
                $('#right-sidebar').toggleClass('bounceInRight');
            }
        });

        // Initialize slimscroll for right sidebar
        $('.sidebar-container').slimScroll({
            height: '100%',
            railOpacity: 0.4,
            wheelStep: 10
        });
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <div className="logo" />
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <span className="m-r-sm text-muted welcome-message">{option.title}</span>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-envelope"></i>  <span className="label label-warning">16</span>
                            </a>
                            <ul className="dropdown-menu dropdown-messages">
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            <img alt="image" className="img-circle" src="assets/img/face/a7.jpg" />
                                        </a>
                                        <div className="media-body">
                                            <small className="pull-right">46h ago</small>
                                            <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br />
                                            <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            <img alt="image" className="img-circle" src="assets/img/face/a4.jpg" />
                                        </a>
                                        <div className="media-body ">
                                            <small className="pull-right text-navy">5h ago</small>
                                            <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br />
                                            <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                            <img alt="image" className="img-circle" src="assets/img/face/a5.jpg" />
                                        </a>
                                        <div className="media-body ">
                                            <small className="pull-right">23h ago</small>
                                            <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br />
                                            <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="text-center link-block">
                                        <a href="mailbox.html">
                                            <i className="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-bell"></i>  <span className="label label-primary">8</span>
                            </a>
                            <ul className="dropdown-menu dropdown-alerts">
                                <li>
                                    <a href="mailbox.html">
                                        <div>
                                            <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="profile.html">
                                        <div>
                                            <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                            <span className="pull-right text-muted small">12 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="grid_options.html">
                                        <div>
                                            <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                            <span className="pull-right text-muted small">4 minutes ago</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <div className="text-center link-block">
                                        <a href="notifications.html">
                                            <strong>See All Alerts</strong>
                                            <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/lockscreen">
                                <i className="fa fa-lock"></i>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={()=>logout()}>
                                <i className="fa fa-sign-out"></i> 注 销
                            </a>
                        </li>
                        <li>
                            <a className="right-sidebar-toggle">
                                <i className="fa fa-tasks"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader
