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

class Main extends React.Component {
    componentWillUnmount(){
        //$('body').addClass('gray-bg');
    }
    componentDidMount(){

        //$('body').removeClass('gray-bg');
        // Run correctHeight function on load and resize window event
        $(window).bind("load resize", function() {
            correctHeight();
            detectBody();
        });

        // MetisMenu
        $('#side-menu').metisMenu();
    
        // Correct height of wrapper after metisMenu animation.
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