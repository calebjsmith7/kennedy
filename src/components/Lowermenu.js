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
            <h1 className="cw">© 2021 KENNEDY RACECARS • 1950 WEST UNION AVENUE A-10, ENGLEWOOD, CO 80110</h1>
          </div>
          <div className="bottomright">
            <ul className="bottomlinks">
              <li><a href='/#restorations' className="fix">Restorations</a></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><a href='/#mods' className="fix">Mods</a></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><a href='/#racecars' className="fix">Race Cars</a></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/services' className="fix">About Us</Link></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/contact' className="fix">Contact</Link></li>
            </ul>
          </div>
        </div>
          )
        };
    }
    
export default Lowermenu;