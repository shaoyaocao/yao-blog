import React from 'react';
import echarts from 'echarts'
class Map extends React.Component {

//@param map 地图数据
  constructor(props) {
    super(props);
    this.state = {
      loaded:false
    };
  }
  initMap = (map) => {
    if(typeof map !== "undefined"&&map!==null){
      echarts.registerMap('sanming', map);
      let chart = echarts.init(document.getElementById('map'));
      chart.setOption({
          backgroundColor: '#404a59',
          geo: {
            map: 'sanming',
            label: {
                emphasis: {
                    show:false,
                    textStyle: {
                      color:'Aqua',
                      fontSize:1,
                    }
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: 'skyblue'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
              },
          },
          series: [
          {
            name: '县市分布',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data:[
              // {
              //   name:"大田县",
              //   value:[117.851845,25.702588,10]
              // },
              {
                name:"将乐县",
                value:[117.476794,26.736898,10]
              },
              // {
              //   name:"建宁县",
              //   value:[116.849593,26.844815,10]
              // },
              // {
              //   name:"梅列区",
              //   value:[117.648316,26.288302,10]
              // },
              // {
              //   name:"明溪县",
              //   value:[117.206407,26.364915,10]
              // },
              // {
              //   name:"宁化县",
              //   value:[116.657407,26.268031,10]
              // },
              // {
              //   name:"清流县",
              //   value:[116.820658,26.183987,10]
              // },
              // {
              //   name:"三元区",
              //   value:[117.558381,26.193803,10]
              // },
              // {
              //   name:"沙县",
              //   value:[117.796363,26.402409,10]
              // },
              // {
              //   name:"泰宁县",
              //   value:[117.178946,26.905781,10]
              // },
              // {
              //   name:"永安市",
              //   value:[117.370473,25.949282,10]
              // },
              // {
              //   name:"尤溪县",
              //   value:[118.20153,26.178948,10]
              // },
            ],
            symbolSize: function (val) {
                return val[2]
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'LightGreen',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
          },
        ]
      });
      this.setState({
        loaded:true
      });
    }
  }
  componentDidMount() {
    let {map} = this.props;
    this.initMap(map);
  }
  componentWillUpdate(nextProps, nextState) {
    if(this.props.map!==nextProps.map){
      let {map} = nextProps;
      this.initMap(map);
    }

  }
  render() {
    return (
      <div id="map" style={{minHeight:"480px"}}></div>
    );
  }

}

export default Map;
