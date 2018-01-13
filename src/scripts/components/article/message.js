import React, { Component } from 'react';

class Meassage extends Component {
    state = {  }
    render() {
        return (
            <div>Message {this.props.params.id}</div>
        );
    }
}

export default Meassage;