import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Lowermenu extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="lower">
          <div className="bottomlogo"></div>
          <div className="cw">
            <h1 className="cw">© 2021 KENNEDY RACECARS • 1950 WEST UNION AVENUE A-10, ENGLEWOOD, CO 80110 • 303.781.7278</h1>
          </div>
          <div className="bottomright">
            <ul className="bottomlinks">
              <li><a href='/#restorations' className="fix">RESTORATIONS</a></li>
              <li>|</li>
              <li><a href='/#mods' className="fix">MODS</a></li>
              <li>|</li>
              <li><a href='/#racecars' className="fix">RACE CARS</a></li>
              <li>|</li>
              <li><Link to='/services' className="fix">SERVICES</Link></li>
              <li>|</li>
              <li><Link to='/contact' className="fix">CONTACT</Link></li>
            </ul>
          </div>
        </div>
          )
        };
    }
    
export default Lowermenu;