import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import option from '../../static/option';
import md5 from 'md5'
import {test,login} from './redux/action'
import toastr from 'toastr'
import {history} from '../../common/store'

const mapStateToProps = (state) => {
  return {
    data: state.get('login').get('data'),
    status: state.get('login').get('status')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (value) => {
        return dispatch(login(value))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
    }

    componentDidMount() {
        
    }


    login = () => {
        let data  = {
            email: this.refs.email.value,
            pwd:md5(this.refs.password.value)
        }
        this.props.onLogin(data).then(()=>{
            if(this.props.status==="SUCCESS"){
                localStorage.setItem("Authorization", this.props.data.authtoken)
                localStorage.setItem("timeout", this.props.data.timeout)//token过期时间
                localStorage.setItem("avatar",  this.props.data.msg.avatar)
                localStorage.setItem("email", this.props.data.msg.email)
                localStorage.setItem("name", this.props.data.msg.name)
                localStorage.setItem("phone", this.props.data.msg.phone)
                localStorage.setItem("remark", this.props.data.msg.remark)
                localStorage.setItem("id", this.props.data.msg._id)
                localStorage.setItem("islogin", "1")
                toastr.success("登录成功,正在为您跳转!")
                setTimeout(function() {
                    history.push('/main')
                }, 1000);
            }else{
                toastr.error(this.props.data)
            }
        })
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
                    <form className="m-t" role="form">
                        <div className="form-group">
                            <input type="email" ref="email" className="form-control" placeholder="Username" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" ref="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <button type="button" onClick={this.login} className="btn btn-primary block full-width m-b">登录</button>
                    </form>
                    <p className="m-t"> <small> yao blog framework base on Inspinia &copy; 2017</small> </p>
                </div>
            </div>
            );
    }

}

export default Login