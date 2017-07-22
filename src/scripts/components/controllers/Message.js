import React from 'react';

class Message extends React.Component {

  render() {
    if(typeof this.props.msg==="undefined"){
      return(
        <div>未收到信息</div>
      )
    }else{
      return (
        <div className="feed-activity-list">
            <div className="feed-element">
                <a href="#" className="pull-left">
                  <img alt="image" className="img-circle" src={this.props.msg.avatar}/>
                </a>
                <div className="media-body">
                    <small className="pull-right">{this.props.msg.fromnow}</small>
                    <strong>{this.props.msg.username}</strong>{this.props.msg.events}<br/>
                    <small className="text-muted">{this.props.msg.time}</small>
                </div>
            </div>
          </div>
      );
    }
  }
}

export default Message;
