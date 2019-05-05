import React, { Component } from 'react';
import './Incentives.css';
import { withRouter } from 'react-router-dom';


class Incentives extends Component {


  render() {
    return (
        <div className="Inc">

            <div className="Inc-title">INDUSTRY LEADING INCENTIVES</div>

            <div className="Inc-div">No Franchise Fee ($25,000 savings)</div>
            <div className="Inc-div">Set Of Ovens For Each Store</div>
            <div className="Inc-div">Reduced Royalties over 6 years as follows:</div>
            <ul className="list">
              <li>First 18 Months – 0.0% Royalty</li>
              <li>Second 18 Months – 1.0% Royalty</li>
              <li> Next 12 Months – 2.0% Royalty</li>
              <li> Next 12 Months – 3.0% Royalty</li>
              <li> Next 12 Months – 4.0% Royalty</li>
            </ul>
            <div className="Inc-div">After 6 years – Standard Rate of 5.0%</div>
            <div className="Inc-div">$3,000 Food Credit (when applicable)</div>


        </div>
    )
  }
}

export default withRouter(Incentives);