import React from 'react';
import {server} from '../../static/http'
import VideoPlayer from './VideoPlayer'
import vex from 'vex-js'
class TimeLine extends React.Component {
// @param time        时间
// @param Location    地点
// @param people      人物
// @param event       事件
// @param color   yellow-bg 新建  lazur-bg 开始 navy-bg 进行中 blue-bg 完成 red-bg 取消
// @param type  时间类型  0 新建  1开始 2进行 3完成 4取消
  selectColor = (isAction) => {
    return isAction?"blue-bg":"red-bg";
  }
  checkAction =(isAction,actionDT) => {
    return isAction?"完成于："+actionDT:"未完成";
  }
  showLargeImg = (path) => {
    vex.dialog.alert({
      unsafeMessage: '<img src='+path+' style="width:100%">'
    })
    $('.vex-overlay').height($(document).height())
  }

  checkFile = (filetype,filepath) => {
    switch (filetype) {
      case "0":
        let imgs = []
        filepath.map((item,index) => {
          imgs.push( <img key={index} src={server+item} onClick={this.showLargeImg.bind(this,server+item)} style={{width:"30%",height:"60px",padding:"4px"}}/>)
        })
        return imgs;
      case "1":
        let option ={
                autoplay: false,
                controls: true,
                sources: [{
                  src: server+filepath[0],
                  type: 'video/flv'
                }]
            }
        return <VideoPlayer { ...option } style={{width:"100%",height:"200px"}}/>
      default:
        return;
    }
  }

  selectIcon =(filetype) => {
    if(filetype==="0"){
      return "fa fa-file-photo-o"
    }else if(filetype==="1"){
      return "fa fa-file-video-o"
    }else{
      return "fa fa-check";
    }
  }
  render() {
    return (
      <div id="vertical-timeline" className="vertical-container dark-timeline center-orientation">
        {this.props.data.map((item,index) => {
          return (<div key={index} className="vertical-timeline-block">
              <div className="blue-bg vertical-timeline-icon">
                  <i className={this.selectIcon(item.filetype)}></i>
              </div>
              <div className="vertical-timeline-content">
                  {/* <h4>内容:</h4>
                  <p>
                    {item.content}
                  </p>
                  <p>
                    {item.result}
                  </p> */}
                  {this.checkFile(item.filetype,item.filepath)}
                  <span className="vertical-date">
                      添加时间：{item.addDT} <br/>
                  </span>
              </div>
          </div>)
        })}
      </div>
    );
  }

}

export default TimeLine;
