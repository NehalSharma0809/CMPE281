import React, {Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class PieChart extends Component {
   
    constructor(props) {
      super(props);

      this.state = {
        options: {
          labels: ['Project 1', 'Project 2', 'Project 3', 'Project 4', 'Project 5'],
          title: {
              text: "No of Tests"
          },
          legend: {
              show: false
          },
          responsive: [{
            breakpoint: 300,
            options: {
              chart: {
                width: 100
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [44, 55, 13, 43, 22],
      }
    }

    render() {
      return (
        

        <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width="190" height="190"/>
        </div>


      );
    }
  }

  export default PieChart;