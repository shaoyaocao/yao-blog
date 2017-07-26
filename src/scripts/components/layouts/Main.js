import React from 'react'
import { withRouter } from 'react-router'
import {Route} from 'react-router-dom'
import Progress from './common/Progress'
import Navigation from './common/Navigation'
import Footer from './common/Footer'
import TopHeader from './common/TopHeader'
import RightSidebar from '../right-sidebar'
import SmallChat from '../small-chat'
import {RouterConfig} from '../router'
import { correctHeight, detectBody } from 'src/scripts/lib/layout.run'
import {history} from '../../common/store'

import vex from 'vex-js'
import config from 'vex-dialog'

class Main extends React.Component {
    componentWillUnmount(){
        //$('body').addClass('gray-bg');
    }
    componentWillMount() {
        let islogin = localStorage.getItem("islogin","0")
        if(islogin!=="1"){
            history.push("/")
        }
    }
    componentDidMount(){
        vex.registerPlugin(config)
        vex.defaultOptions.className = 'vex-theme-flat-attack'
        vex.dialog.buttons.YES.text = '确认'
        vex.dialog.buttons.NO.text = '取消'
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        $('#side-menu').metisMenu();
    
        $('.metismenu a').click(() => {
            setTimeout(() => {
                correctHeight();
            }, 300)
        });
    }
    render() {
        return (
            <div id="wrapper">
                <Progress />
                <Navigation location={this.props.location}/>
                <div id="page-wrapper" className="gray-bg">
                    <TopHeader />
                        {RouterConfig.map((route, index) => (
                          // Render more <Route>s with the same paths as
                          // above, but different components this time.
                          <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            strict={route.strict}
                            component={route.component}
                          />
                        ))}
                    <Footer />
                </div>
                <RightSidebar />
            </div>

        )
    }
}

export default withRouter(Main)