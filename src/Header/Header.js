import React, { Component } from 'react';
import './Header.css';
import { Link, withRouter } from 'react-router-dom';


class Header extends Component {


  render() {
    return (
        <div className="Header">
            <Link to="/"><div className="Header-div">PLOTS</div></Link>  
            <Link to="/contact"><div className="Header-div">CONTACT</div></Link>  
            <Link to="/incentives"><div className="Header-div">INCENTIVES</div></Link>  
            <a href="/downloads/site-form.doc" download><div className="Header-div">SITE FORM</div></a>

        </div>
    )
  }
}

export default withRouter(Header);