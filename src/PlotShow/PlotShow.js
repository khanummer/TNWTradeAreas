import React, { Component } from 'react';
import './PlotShow.css';
import { withRouter } from 'react-router-dom';
import jsonData from '../json/plots.json';


class PlotShow extends Component {

    state = {
        plots: jsonData
    }

  render() {
      console.log(this.state.plots[this.props.match.params.id])
    return (
      <div className="plot-show-plot">
        <div className="plots-show-plot-name">Trade Area #{this.state.plots[this.props.match.params.id].tradeArea}</div>
        <div>{this.state.plots[this.props.match.params.id].location}</div> 
      </div>
    )
  }
}

export default withRouter(PlotShow);