import React from 'react'

class Login extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
    }
    render() {
        return (
            <div className="passwordBox animated fadeInDown">
                <div className="row">

                    <div className="col-md-12">
                        <div className="ibox-content">

                            <h2 className="font-bold">Forgot password</h2>

                            <p>
                                Enter your email address and your password will be reset and emailed to you.
                            </p>

                            <div className="row">

                                <div className="col-lg-12">
                                    <form className="m-t" role="form" action="index.html">
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email address" required="" />
                                        </div>

                                        <button type="submit" className="btn btn-primary block full-width m-b">Send new password</button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-6">
                        Copyright Example Company
                    </div>
                    <div className="col-md-6 text-right">
                       <small>© 2014-2015</small>
                    </div>
                </div>
            </div>
            );
    }

}

export default Login