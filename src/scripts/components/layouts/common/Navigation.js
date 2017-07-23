import React, { Component } from 'react';
//import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Location } from 'react-router';
import option from '../../../static/option'
import api from '../../../static/api'


class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }
    secondLevelExpanded(routeName,name){
        if(this.props.location.pathname.indexOf("showeventflow")!=-1){
            return name==="问题处置" ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
        }
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }
    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation" style={{zIndex: 0}}>
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                                <img alt="image" className="img-circle" src={api.server+localStorage.getItem("avatar")} />
                                 </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">{localStorage.getItem("name")}</strong>
                                 </span> <span className="text-muted text-xs block">{localStorage.getItem("remark")}<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="contacts.html">Contacts</a></li>
                                    <li><a href="mailbox.html">Mailbox</a></li>
                                    <li className="divider"></li>
                                    <li><Link to="/lockscreen">LockScreen</Link></li>
                                    <li><Link to="/login">Logout</Link></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>
                        {option.menu.map((item,index)=>{
                          return !item.isParent?
                          <li key={index} className={this.activeRoute(item.url)} style={item.hidden?{display:"none"}:{display:""}}>
                              <Link to={item.url}><i className={item.class}></i> <span className="nav-label">{item.name}</span></Link>
                          </li>
                          :
                          <li key={index}  className={this.activeRoute(item.url)} style={item.hidden?{display:"none"}:{display:""}}>
                              <a href="#"><i className={item.class}></i> <span className="nav-label">{item.name}</span><span className="fa arrow"></span></a>
                                <ul className={this.secondLevelExpanded(item.url)}>
                                {item.children.map((v,i) => {
                                  return !v.isParent?
                                    <li key={i} className={this.activeRoute(v.url)} style={v.hidden?{display:"none"}:{display:""}}><Link to={v.url}>{v.name}</Link></li>
                                    :
                                    <li key={i}>
                                        <a href="#">{v.name}<span className="fa arrow"></span></a>
                                        <ul className="nav nav-third-level">
                                        {v.children.map((child,num) => {
                                          return <li key={num}><Link to={child.url}>{child.name}</Link></li>
                                        })}
                                        </ul>
                                    </li>
                                })}
                            </ul>
                          </li>
                        })}
                        {/*<li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">Main view</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">Minor view</span></Link>
                        </li>*/}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navigation