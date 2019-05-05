import React, { Component } from 'react';
import './Header.css';
import { Link, withRouter } from 'react-router-dom';


class Header extends Component {


  render() {
    return (
        <div className="Header">
            <Link className="Link" to="/"><div className="Header-div">TRADE AREAS</div></Link>  
            <Link className="Link" to="/incentives"><div className="Header-div">INCENTIVES</div></Link>  
            <a href="/downloads/site-form.doc" download><div className="Header-div">SITE FORM</div></a>
            <Link className="Link" to="/contact"><div className="Header-div">CONTACT</div></Link>  
            <a href="https://www.tnwbusiness.com/"><div className="Header-div">TNW BUSINESS</div></a>

        </div>
    )
  }
}

export default withRouter(Header);