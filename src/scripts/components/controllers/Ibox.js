import React from 'react';

class Ibox extends React.Component {
//param title      主标题
//param subtitle    副标题
//param amount      统计数据
//param subname     参数说明
//param percentage  完成率
//param status    success info primary danger
  render() {
    return (
      <div className="ibox float-e-margins">
        <div className="ibox-title">
            <span className={this.props.status?"label label-"+this.props.status+" pull-right":"label label-success pull-right"}>{this.props.subtitle?this.props.subtitle:null}</span>
            <h5>{this.props.title?this.props.title:null}</h5>
        </div>
        <div className="ibox-content">
            <h1 className="no-margins">{this.props.amount?this.props.amount:null}</h1>
            <div className={this.props.status?"stat-percent font-bold text-"+this.props.status+" pull-right":"stat-percent font-bold text-success"}>{this.props.percentage?this.props.percentage:null}
              <i className="fa  fa-pie-chart"></i>
            </div>
            <small>{this.props.subname?this.props.subname:null}</small>
        </div>
      </div>
    );
  }

}

export default Ibox;
