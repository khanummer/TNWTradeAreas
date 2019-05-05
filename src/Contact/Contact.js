import React, { Component } from 'react';
import './Contact.css';
import { withRouter } from 'react-router-dom';


class Contact extends Component {


  render() {
    return (
        <div className="Contact">
            <div className="Contact-header">CONTACT</div>
        <div className="c">

            <div className="Contact-left">
              <div className="i">Wasim Rahman</div>

              <div className="i">WRKHAN2@AOL.COM</div>

              <div className="i">(909)-262-0973</div>
            </div>

            <div className="Contact-form">
              <form action="mailto:wrkhan2@aol.com" method="post" enctype="text/plain">
                Name:<br></br>
                  <input  className="input" type="text" name="Name"></input><br></br>
                E-Mail:<br></br>
                  <input  className="input" type="text" name="E-Mail"></input><br></br>
                Phone Number:<br></br>
                  <input className="input"  type="text" name="Phone Number"></input><br></br>
                Trade Areas Interested In:<br></br>
                  <input  className="input" type="text" name="Trade Areas Interested In"></input><br></br>
                <input className="home-buttons" type="reset" value="Reset"></input>
                <input className="home-buttons" type="submit" value="Send"></input>
              </form>
            </div>
        </div>
        </div>
    )
  }
}

export default withRouter(Contact);