import React from 'react';
import {Box,BoxHeader,BoxContent} from './Box'

class Step extends React.Component {
  componentDidMount() {
    let labels={
        cancel: "取消",
        current: "当前步骤:",
        pagination: "Pagination",
        finish: "完成",
        next: "下一步",
        previous: "上一步",
        loading: "加载中 ..."
    }
    let onStepChanging = this.props.onStepChanging;
    let onStepChanged = this.props.onStepChanged;
    let onFinished = this.props.onFinished;
    try {
      $("#wizard").steps({labels,onStepChanging,onStepChanged,onFinished});
    } catch (e) {
      console.log(e)
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.refreshcount>this.props.refreshcount){
  //       try {
  //         $('#wizard').steps('reset');
  //       } catch (e) {
  //         console.log(e)
  //       }
  //   }
  // }
  render() {
    let {children,steps} = this.props;

    if(typeof children==="undefined"){return (<div>配置错误,请传入分页</div>)}
    if(typeof steps==="undefined"){return (<div>配置错误,请配置步骤数</div>)}
    return (
      <div>
        <Box>
          <BoxHeader title="创建步骤">
            <div className="ibox-tools">
                <a className="collapse-link">
                    <i className="fa fa-chevron-up"></i>
                </a>
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i className="fa fa-wrench"></i>
                </a>
            </div>
          </BoxHeader>
          <BoxContent>
            <div id="wizard">
              {
                steps.map((item,index) => {
                      return <h1 key={index}>第{index+1}步</h1>
                })
              }
              {
                children.map((item,index) => {
                  return (
                    <div key={index} className="step-content">
                      <div className="text-left m-t-md">
                        {
                          typeof item.props.title !=="undefined"?
                          <h2>{item.props.title}</h2>
                          :
                          null
                        }
                        {item}
                      </div>
                    </div>)
                })
              }
            </div>
          </BoxContent>
        </Box>
      </div>
    );
  }

}

export default Step;
