import React from 'react';
import {formatTimestamp2DateInHour} from '../../static/tool'
import {Box,BoxHeader,BoxContent,Row,Col} from './Box';

let getData;
const weatherAPI = "http://api.wunderground.com/api/34651fbe5f5c9046/forecast/lang:CN/q/zmw:00000.1.58847.json";//换成当地的日期接口

export default class Weather extends React.Component {
    constructor(props) {
      super(props);
    }
    // componentWillMount() {
    //   this.setState({
    //     weather: this.props.weather
    //   })
    // }
  // componentWillMount(){
  //   let that = this;
  //   getData = $.get(weatherAPI,function(result){
  //     let {forecastday} = result.forecast.simpleforecast;
  //     that.setState({
  //       weather:forecastday
  //     })
  //   })
  // }
  // componentWillUnmount(){
  //   getData.abort();//中断回调方法
  // }
    componentWillReceiveProps(nextProps) {
      if(nextProps!==this.props){
        console.log(nextProps)
      }
    }
  render() {
    return (
        <Box>
            <BoxHeader title="福州天气"/>
            <BoxContent>
                <Row>
                    {
                this.props.weather===""?<Col xs={12} className="weather-form">"天气数据载入中"</Col>:
                this.props.weather.map((item)=>{
                            return(
                            <Col sm={3} key={item.period} className="weather-form"  style={item.period===1?null:{borderLeft:"1px solid #fff"}}>
                                <div className="weather-date">
                                <p style={{width:"100%"}}>{formatTimestamp2DateInHour(item.date.epoch).split("日")[0]}日</p>
                                <p style={{width:"100%"}}>{formatTimestamp2DateInHour(item.date.epoch).split("日")[1]+" "+item.date.weekday_short}</p>
                                <span className="weather-icon" style={{width:"100%"}}>
                                    <img src={item.icon_url} />
                                </span>
                                <p style={{width:"100%",fontSize:"1.3em"}}>{item.conditions}</p>
                                <p style={{width:"100%"}}>最高气温:{item.high.celsius}°c</p>
                                <p style={{width:"100%",margin: '0px'}}>最低气温:{item.low.celsius}°c</p>
                                </div>
                            </Col>
                            )
                        })
                    }
                </Row>
            </BoxContent>
        </Box>

    );
  }
}
