import React from 'react';

class Box extends React.Component {

  render() {
    return (
      <div className="ibox float-e-margins">
        {
          React.Children.map(this.props.children,(child) => {
            return child
          })
        }
      </div>
    );
  }
}
class BoxHeader extends React.Component {
  render() {
    return(
      <div className="ibox-title">
        <h5>{this.props.title?this.props.title:null}</h5>
        {
          React.Children.map(this.props.children,(child) => {
            return child
          })
        }
      </div>
    )

  }
}
class BoxContent extends React.Component {
  render() {
    return(
      <div className={typeof this.props.className!=="undefined"?"ibox-content "+this.props.className:"ibox-content"} style={this.props.style}>
        {
          React.Children.map(this.props.children,(child) => {
            return child
          })
        }
      </div>
    )
  }
}

class Row extends React.Component {
  render() {
    return (
      <div className="row" style={this.props.style}>
        {
          React.Children.map(this.props.children,(child) => {
            return child
          })
        }
      </div>
    );
  }
}

class Col extends React.Component {

  initClass = () => {
    let  {md,lg,sm,xl} = this.props;
    let mdc = typeof md !=="undefined"? "col-md-"+md:"";
    let lgc = typeof lg !=="undefined"? "col-lg-"+lg:"";
    let smc = typeof sm !=="undefined"? "col-sm-"+sm:"";
    let xlc = typeof xl !=="undefined"? "col-xl-"+xl:"";
    return mdc+' '+lgc+' '+smc+' '+xlc;
  }

  render() {
    return (
      <div className={this.initClass()}>
        {
          React.Children.map(this.props.children,(child) => {
            return child
          })
        }
      </div>
    );
  }

}
export {Box,BoxHeader,BoxContent,Row,Col};
