import React, { Component } from 'react';
import './Content.scss'

class Content extends Component {
    state = {  }
    render() {
        return (
            <div className={"container container-content"}>
                {
                    React.Children.map(this.props.children, (child) => {
                        return child
                    })
                }
            </div>
        );
    }
}

export default Content;