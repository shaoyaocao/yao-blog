import React from 'react';

class FlotChart extends React.Component {

  constructor(){
    super()
  }

  componentDidMount() {
    try {
      let container = $("#flot-line-chart-moving");
      let maximum = container.outerWidth() / 2 || 300;
      let data = [];
      function getRandomData() {
          if (data.length) {
              data = data.slice(1);
          }
          while (data.length < maximum) {
              let previous = data.length ? data[data.length - 1] : 50;
              let y = previous + Math.random() * 10 - 5;
              data.push(y < 0 ? 0 : y > 100 ? 100 : y);
          }
          let res = [];
          for (let i = 0; i < data.length; ++i) {
              res.push([i, data[i]])
          }
          return res;
      }
      let series = [{
          data: getRandomData(),
          lines: {
              fill: true
          }
      }];
      let plot = $.plot(container, series, {
          grid: {

              color: "#999999",
              tickColor: "#D4D4D4",
              borderWidth:0,
              minBorderMargin: 20,
              labelMargin: 10,
              backgroundColor: {
                  colors: ["#ffffff", "#ffffff"]
              },
              margin: {
                  top: 8,
                  bottom: 20,
                  left: 20
              },
              markings: function(axes) {
                  var markings = [];
                  var xaxis = axes.xaxis;
                  for (let x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 2) {
                      markings.push({
                          xaxis: {
                              from: x,
                              to: x + xaxis.tickSize
                          },
                          color: "#fff"
                      });
                  }
                  return markings;
              }
          },
          colors: ["#1ab394"],
          xaxis: {
              tickFormatter: function() {
                  return "";
              }
          },
          yaxis: {
              min: 0,
              max: 110
          },
          legend: {
              show: true
          }
      });
      setInterval(function updateRandom() {
          series[0].data = getRandomData();
          plot.setData(series);
          plot.draw();
      }, 40);
    } catch (e) {
      console.log(e)
    } finally {

    }
  }

  render() {
    return (
      <div className="flot-chart">
          <div className="flot-chart-content" id="flot-line-chart-moving"></div>
      </div>
    );
  }

}

export default FlotChart;
