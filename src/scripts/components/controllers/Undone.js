import React, { Component } from 'react';

class Undone extends Component {

  render() {
    return (
      <div>
        <img src="/assets/img/littleman.png" style={{marginBottom:"-28px"}}/>
        <div className="progress" style={{border:"1px solid #8e8a8a"}}>
          <div className="progress-bar progress-bar-striped bg-success active" 
            style={{width:"60%"}}
            role="progressbar" 
            aria-valuenow="60" 
            aria-valuemin="0" 
            aria-valuemax="100">
            </div>
        </div>
        <h2>{this.props.msg}</h2>
      </div>
    );
  }

}

export default Undone;
