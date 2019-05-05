import React, { Component } from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
// import jsonData from './json/plots.json';
import PlotsList from './PlotsList/PlotsList';
import PlotShow from './PlotShow/PlotShow';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Incentives from './Incentives/Incentives';

class App extends Component {
  render() {
    // console.log(jsonData)
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <PlotsList/>}/>
          <Route exact path="/plots/:id" component={() => <PlotShow/>}/>
          <Route exact path="/contact" component={() => <Contact/>}/>
          <Route exact path="/incentives" component={() => <Incentives/>}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
