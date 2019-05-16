import React, { Component } from 'react';
import './PlotsList.css';
import { withRouter } from 'react-router-dom'
import jsonData from '../json/plots.json';


class PlotsList extends Component {
    state = {
        plots: jsonData
    }

  render() {
      console.log(this.state)
    return (
      <div className="plots-list">
        
        <div className="plots-list-title">TNW BUISNESS BROKERS</div>

        <div className="plots-list-subtitle">California Papa John's Trade Area's</div>

        <div className="plots-list-sub-subtitle"><a href="#fresno">Fresno</a> | <a href="#sacramento">Sacramento</a> | <a href="#visalia">Visalia</a> | <a href="#madera">Madera</a> | <a href="#reedly">Reedly</a> | <a href="#selma">Selma</a> | <a href="#hanford">Hanford</a> | <a href="#lemoore">Lemoore</a> | <a href="#tulare">Tulare</a> | <a href="#porterville">Porterville</a> | <a href="#delano">Delano</a> | <a href="#sanger">Sanger</a> | <a href="#clovis">Clovis</a> </div>

        {/* { this.state.plots.map((plot, i) =>  
            <div className="plots-list-plot" key={i}>
                <Link to={`/plots/${plot.id}`}><div className="plots-list-plot-name"> Trade Area #{plot.tradeArea}</div></Link>
                <div>{plot.location}</div> 
            </div>) 
        } */}

        <div className="trade-area" id="fresno">
          <div className="mid">
            <div className="trade-area-name">Trade Area Fresno # 1</div>
            <div className="trade-area-population">Population - 98,736</div>
          </div>
          <div className="iframe">
          <iframe title="1" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=fresno%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area">
        <div className="mid">
          <div className="trade-area-name">Trade Area Fresno # 2</div>
          <div className="trade-area-population">Population - 105,840</div>
        </div>
          <div className="iframe">
          <iframe title="2" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=fresno%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area">
        <div className="mid">
          <div className="trade-area-name">Trade Area Fresno # 3</div>
          <div className="trade-area-population">Population - 88,259</div>
        </div>
          <div className="iframe">
          <iframe title="3" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=fresno%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area">
        <div className="mid">
          <div className="trade-area-name">Trade Area Fresno # 4</div>
          <div className="trade-area-population">Population - 91,110</div>
        </div>
          <div className="iframe">
          <iframe title="4" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=fresno%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="sacramento">
        <div className="mid">
          <div className="trade-area-name">Trade Area Sacramento # 1</div>
          <div className="trade-area-population">Population - 103,015</div>
        </div>
          <div className="iframe">
          <iframe title="5" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=sacramento%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>

        <div className="trade-area">
        <div className="mid">
          <div className="trade-area-name">Trade Area Sacramento # 2</div>
          <div className="trade-area-population">Population - 110,875</div>
        </div>
          <div className="iframe">
          <iframe title="6" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=sacramento%2C%20ca&t=&z=9&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>

        <div className="trade-area" id="visalia">
        <div className="mid">
          <div className="trade-area-name">Trade Area Visalia # 1</div>
          <div className="trade-area-population">Population - 75,067</div>
        </div>
          <div className="iframe">
          <iframe title="7" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=visalia%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area">
        <div className="mid">
          <div className="trade-area-name">Trade Area Visalia # 2</div>
          <div className="trade-area-population">Population - 83,756</div>
        </div>
          <div className="iframe">
          <iframe title="8" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=visalia%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="madera">
        <div className="mid">
          <div className="trade-area-name">Trade Area Madera</div>
          <div className="trade-area-population">Population - 83,556</div>
        </div>
          <div className="iframe">
          <iframe title="9" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=madera%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="reedly">
        <div className="mid">
          <div className="trade-area-name">Trade Area Reedly</div>
          <div className="trade-area-population">Population - 70,946</div>
        </div>
          <div className="iframe">
          <iframe title="10" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=reedly%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="selma">
        <div className="mid">
          <div className="trade-area-name">Trade Area Selma</div>
          <div className="trade-area-population">Population - 50,532</div>
        </div>
          <div className="iframe">
          <iframe title="11" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=selma%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="hanford">
        <div className="mid">
          <div className="trade-area-name">Trade Area Hanford</div>
          <div className="trade-area-population">Population - 68,795</div>
        </div>
          <div className="iframe">
          <iframe title="11" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=hanford%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="lemoore">
        <div className="mid">
          <div className="trade-area-name">Trade Area Lemoore</div>
          <div className="trade-area-population">Population - 37,938</div>
        </div>
          <div className="iframe">
          <iframe title="12" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=lemoore%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="tulare">
        <div className="mid">
          <div className="trade-area-name">Trade Area Tulare</div>
          <div className="trade-area-population">Population - 70,292</div>
        </div>
          <div className="iframe">
          <iframe title="13" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=tulare%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="porterville">
        <div className="mid">
          <div className="trade-area-name">Trade Area Porterville</div>
          <div className="trade-area-population">Population - 80,524</div>
        </div>
          <div className="iframe">
          <iframe title="14" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=porterville%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="delano">
        <div className="mid">
          <div className="trade-area-name">Trade Area Delano</div>
          <div className="trade-area-population">Population - 77,284</div>
        </div>
          <div className="iframe">
          <iframe title="15" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=delano%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="sanger">
        <div className="mid">
          <div className="trade-area-name">Trade Area Sanger</div>
          <div className="trade-area-population">Population - 31,186</div>
        </div>
          <div className="iframe">
          <iframe title="16" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=sanger%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

        <div className="trade-area" id="clovis">
        <div className="mid">
          <div className="trade-area-name">Trade Area Clovis</div>
          <div className="trade-area-population">Population - 105,461</div>
        </div>
          <div className="iframe">
          <iframe title="17" width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=clovis%2C%20ca&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>        
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(PlotsList);