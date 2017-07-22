import React from 'react';
import {server} from '../../static/http'
import {formatTimestamp2DateAnsic} from '../../static/tool'
import VideoPlayer from './VideoPlayer'
import vex from 'vex-js'

class EventLine extends React.Component {
// @param time        时间
// @param Location    地点
// @param people      人物
// @param event       事件
// @param color   yellow-bg 新建  lazur-bg 开始 navy-bg 进行中 blue-bg 完成 red-bg 取消
// @param type  时间类型  0 新建  1开始 2进行 3完成 4取消
  selectColor = (isAction) => {
    return isAction?"blue-bg":"red-bg";
  }
  checkAction =(exeDT) => {
    if(exeDT!==""){
      return "完成于："+formatTimestamp2DateAnsic(exeDT)
    }else{
      return "未完成"
    }
  }
  componentDidMount() {
    // console.log(this.props)
  }
  checkFlow = (fromgrid,togrid,intEventType) => {
    // return id==="0"?:"下派"
    switch (intEventType) {
      case "0":
        return <small>{fromgrid}  <font style={{color:"red"}}>上报</font>  {togrid}</small>
        break;
      case "1":
        return <small>{fromgrid}  <font style={{color:"red"}}>下派</font>  {togrid}</small>
        break;
      case "2":
        return <small>{togrid}  <font style={{color:"red"}}>现场处置</font></small>
        break;
      default:
        return <small>{togrid}  <font style={{color:"red"}}>接收</font>  事件</small>
    }
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
                  <h4>添加时间:{item.addDT}</h4>
                  <p>
                    {item.content}
                  </p>
                  <p>
                    {item.result}
                  </p>
                  {this.checkFile(item.filetype,item.filepath)}
                  <span className="vertical-date">
                    {this.checkFlow(item.fromgrid,item.togrid,item.intEventType)}
                  </span>
              </div>
          </div>)
        })}
      </div>
    );
  }

}

export default EventLine;
