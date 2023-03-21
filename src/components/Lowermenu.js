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
          <HashLink to='/#top' style={{display: 'flex', marginLeft: '3%', marginRight: '2%', marginTop: 'auto', marginBottom: 'auto'}}>
          <div className="bottomlogo"></div>
          </HashLink>
          <div className="cw" style={{width: 'auto', flexWrap: 'nowrap'}}>
          <h1 className="cw" style={{display: 'inline', flexWrap: 'nowrap', fontSize: 12, lineHeight: 1.2}}>© 2023 KENNEDY RACECARS • <a style={{textDecoration: 'none', color: '#1e2427'}} href='tel:303-781-7278'>(303) 781-7278 </a> &nbsp;•&nbsp; <br/>1950 WEST UNION AVENUE A-10, ENGLEWOOD, CO 80110 <br/> <a style={{textDecoration: 'none', color: '#1e2427', fontFamily: 'Cinzel', fontSize: 13.5}} href='mailto:kennedyracecars@cs.com'>kennedyracecars@cs.com</a> </h1>
          
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
              <li className="vertsep">|</li>
              <hr className="horizsep"></hr>
              <li><Link to='/disclosure' className="fix">Disclaimer</Link></li>
            </ul>
          </div>
          <HashLink to='/#top' style={{width: '10vw', maxWidth: '95%', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: '3%'}}>
          <img id="desktopLogo" src={kenlogodiff} style={{width: '10vw', maxWidth: '95%', marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: '3%'}}/>
          </HashLink>
          <HashLink to='/#top'  id="mobileLogo" style={{maxWidth: '95%', marginBottom: 'auto'}}>
          <img  src={kenlogodiff} style={{maxWidth: '95%', marginBottom: 'auto'}}/>
          </HashLink>
        </div>
          )
        };
    }
    
export default Lowermenu;