import React, { Component } from 'react';

class YaoCheckbox extends Component {

    componentDidMount() {
        
    }

    componentWillMount() {
               
    }

    render() {
        return (
            <div>
                <label style={this.props.checked?{color:"green"}:{color:"red"}}>
                    <input className="i-checks" type="checkbox" defaultChecked={this.props.checked} /><i></i>{this.props.checked?" 已完成":" 未完成"}
                </label>
            </div> 
        );
    }
}

export default YaoCheckbox;