
import React from 'react';
import {ButtonGroup, Button} from 'reactstrap';
//import 'c3/c3.css';
//import c3 from 'c3/c3.js';
import './css/main.css'

const columns = [
  ['Active', 30, 200, 100, 400, 150, 250],
  ['Pending', 50, 20, 10, 40, 15, 25],
  ['Contingent', 12, 34, 43, 99, 21, 77]
];


class MarketTrends extends React.Component {
  constructor(props) {
    super(props);
    this._setBarChart = this._setBarChart.bind(this);
    this._setLineChart = this._setLineChart.bind(this);
    this.state = {
      chartType: 'bar'
    };
  }
  _setBarChart() {
    this.setState({ chartType: 'bar' });
  }
  _setLineChart() {
    this.setState({ chartType: 'line' });
  }
	render() {
		return (
      <div className="app-wrap">
        <Chart 
          columns={columns}
          chartType={this.state.chartType} />
      <span>  
          <strong>Change Chart Type</strong>
          <ButtonGroup className="ml-2">
            <Button onClick={this._setBarChart}>bar</Button> 
            <Button onClick={this._setLineChart}>Line</Button>
          </ButtonGroup>
        </span>
      </div>
    );
  }
}

class Chart extends React.Component {
  componentDidMount() {
    this._updateChart();
  }
  componentDidUpdate() {
    this._updateChart();
  }
  _updateChart() {
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: this.props.columns,
        type: this.props.chartType
      },
      groups: [
        ['Active', 'Pending', 'Contingent']
      ]
    });

    setTimeout(function () {
        chart.groups([['Active', 'Pending', 'Contingent']])
    }, 500);
  }
  render() {
    return <div id="chart">hi</div>;    
  }
}

export default MarketTrends;