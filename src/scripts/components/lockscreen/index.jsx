import React from 'react'
import { Link } from 'react-router'

class LockScreen extends React.Component {
    componentWillUnmount(){
        $('body').removeClass('gray-bg')
    }
    componentDidMount(){
        $('body').addClass('gray-bg')
    }
    render() {
        return (
            <div id="lockscreen-wrapper">
                <div className="lock-word animated fadeInDown">
                    <span className="first-word">LOCKED</span><span>SCREEN</span>
                </div>
                <div className="middle-box text-center lockscreen animated fadeInDown">
                    <div>
                        <div className="m-b-md">
                        <img alt="image" className="img-circle circle-border" src="assets/img/face/a1.jpg" />
                        </div>
                        <h3>John Smith</h3>
                        <p>Your are in lock screen. Main app was shut down and you need to enter your passwor to go back to app.</p>
                        <form className="m-t" role="form" action="index.html">
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="******" required="" />
                            </div>
                            <button type="submit" className="btn btn-primary block full-width">Unlock</button>
                        </form>
                    </div>
                </div>
            </div>
            );
    }

}

export default LockScreen