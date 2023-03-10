import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { HashLink } from 'react-router-hash-link';
import kenlogodiff from '../images/kendifflogo.png';

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
          <h1 className="cw" style={{flexDirection: 'row'}}><a style={{textDecoration: 'none', color: '#1e2427'}} href='tel:303-781-7278'>(303) 781-7278 </a> &nbsp;•&nbsp; <a style={{textDecoration: 'none', color: '#1e2427'}} href='mailto:kennedyracecars@cs.com'>kennedyracecars@cs.com</a></h1>
          </div>
          <div className="bottomright">
            <ul className="bottomlinks">
              <li><HashLink to='/#restorations' className="fix">Restorations</HashLink></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><HashLink to='/#mods' className="fix">Mods</HashLink></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><HashLink to='/#racecars' className="fix">Race Cars</HashLink></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/services' className="fix">About Us</Link></li>
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/contact' className="fix">Contact</Link></li>
            </ul>
          </div>
          <img id="desktopLogo" src={kenlogodiff} style={{width: '10vw', maxWidth: '95%', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: '3%'}}/>
          <img id="mobileLogo" src={kenlogodiff} style={{maxWidth: '95%', marginBottom: 'auto'}}/>
        </div>
          )
        };
    }
    
export default Lowermenu;