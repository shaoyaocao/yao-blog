import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <div className="contact-box">
          <a href="profile.html">
          <div className="col-sm-4">
              <div className="text-center">
                  <img alt="image" className="img-circle m-t-xs img-responsive" src={this.props.avatar}/>
                  <div className="m-t-xs font-bold">{this.props.position}</div>
              </div>
          </div>
          <div className="col-sm-8">
              <h3><strong>{this.props.name}</strong></h3>
              <p><i className="fa fa-map-marker"></i>{this.props.location}</p>
              <address>
                  <strong>近期状态</strong><br/>
                  {this.props.status.map((item,index) => {
                    return <div key={index}>{item}<br/></div>
                  })}
                  <abbr title="Phone">电话:</abbr> {this.props.telphone}
              </address>
          </div>
          <div className="clearfix"></div>
              </a>
      </div>
    );
  }

}

export default Contact;
