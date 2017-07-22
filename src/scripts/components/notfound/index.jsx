import React from 'react'
import Undone from '../controllers/Undone'
class NotFound extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
    }
    render() {
        return (
            <div className="middle-box text-center animated fadeInDown">
                <h1>404</h1>
                <Undone msg="页面不存在,请重新检查路径"/>
                {/*<h1>404</h1>
                <h3 className="font-bold">Page Not Found</h3>

                <div className="error-desc">
                    Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try found something else in our app.
                </div>*/}
            </div>
            );
    }

}

export default NotFound

