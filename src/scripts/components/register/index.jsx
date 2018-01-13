import React from 'react'
import { Link } from 'react-router-dom'
import 'src/assets/dynamic/style/icheck/all.css'

class Login extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
        $('.i-checks').iCheck({
            checkboxClass: 'icheckbox_flat-green',
            radioClass: 'iradio_flat-green',
        });
    }
    render() {
        return (
            <div className="middle-box text-center loginscreen   animated fadeInDown">
                <div>
                    <div>
                        <h1 className="logo-name">IN+</h1>
                    </div>
                    <h3>Register to IN+</h3>
                    <p>Create account to see it in action.</p>
                    <form className="m-t" role="form" action="login.html">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" required="" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email" required="" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="" />
                        </div>
                        <div className="form-group">
                                <div className="checkbox i-checks"><label> <input type="checkbox" /><i></i> Agree the terms and policy </label></div>
                        </div>
                        <button type="submit" className="btn btn-primary block full-width m-b">Register</button>

                        <p className="text-muted text-center"><small>Already have an account?</small></p>
                        <Link className="btn btn-sm btn-white btn-block" to="/login">Login</Link>
                    </form>
                    <p className="m-t"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>
                </div>
            </div>
            );
    }

}

export default Login