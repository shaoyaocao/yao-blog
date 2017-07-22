import React from 'react'
import { Link } from 'react-router-dom'
import option from '../../static/option';

let endpoint = option.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  endpoint = option.production.endpoint;
}

class Login extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
        console.log(endpoint)
    }
    render() {
        return (
            <div className="middle-box text-center loginscreen animated">
                 <video autoPlay loop id="bgvid" className="login-vod">
                    <source src="./assets/vod/backgroundvideo.mov"/>
                </video> 
                <div>
                    <div>
                        <h1 className="logo-name">yao</h1>
                    </div>
                    <h3>欢迎回来</h3>
                    <p>快登录吧</p>
                    <form className="m-t" role="form" action="index.html">
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">登录</button>
                    </form>
                    <p className="m-t"> <small> yao blog framework base on Inspinia &copy; 2017</small> </p>
                </div>
            </div>
            );
    }

}

export default Login