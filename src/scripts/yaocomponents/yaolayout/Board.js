import React, { Component } from 'react';
import './Board.scss'
class Board extends Component {
    state = {  }
    render() {
        return (
            <div className="col-xs-12 board">
                还没想好放什么.姑且放一只大师吧
                <img src="./assets/img/masterliao.jpg" style={{width:"100%"}} alt=""/>
            </div>
        );
    }
}

export default Board;