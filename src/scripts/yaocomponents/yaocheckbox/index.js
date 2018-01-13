import React, { Component } from 'react';
import './index.scss'

class Index extends Component {
    render() {
        return (
            <div className={this.props.type}>  
                <input type="checkbox" onChange={this.props.onChange} value="None" id={this.props.id} name="check" checked={this.props.checked} />
                <label htmlFor={this.props.id}></label>
            </div>
        );
    }
}

export default Index;