import React, { Component } from 'react';
// import './Incentives.css';
import { withRouter } from 'react-router-dom';


class Incentives extends Component {


  render() {
    return (
        <div>
            Non-Traditional Incentives

            No franchise fee
            No royalty for six months
            Set of pizza ovens
            Food credit or direct mail campaign (as applicable)

            INDUSTRY LEADING Incentives

            No Franchise Fee ($25,000 savings)
            Set Of Ovens For Each Store
            Reduced Royalties over 6 years as follows:
            First 18 Months – 0.0% Royalty
            Second 18 Months – 1.0% Royalty
            Next 12 Months – 2.0% Royalty
            Next 12 Months – 3.0% Royalty
            Next 12 Months – 4.0% Royalty
            After 6 years – Standard Rate of 5.0%
            $3,000 Food Credit (when applicable)


        </div>
    )
  }
}

export default withRouter(Incentives);