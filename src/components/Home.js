import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import kenvid from "../images/kenvid.mp4";
import kensmallvid from "../images/kensmallvid.mp4";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


class Home extends Component {
  
  render() {
    return (
        <div>
            <a id="top"></a>
            <div className="a">
                <video playsInline webkit-playsinline autoPlay loop muted preload="true" id="bigvid" width="100%" className="video">
                <source src={kenvid} type="video/mp4" media="(min-device-width: 568px)"></source>
                </video>
                <video playsInline webkit-playsinline autoPlay loop muted preload="true" id="smallvid" width="100%" className="video">
                <source src={kensmallvid} type="video/mp4" media="(max-device-width: 568px)"></source>
                </video>
            </div>
            
            
            <div className="b">
                <h1 className="info">At Kennedy Racecars we provide the highest quality
                Restorations, Modifications, and Race Cars
                and always exceed expectations</h1>
            <hr className="binfoh"/>
            </div>
            <div className="scrollsection"><h1 className="gallery">Gallery</h1></div>
            <div className="scrolling-wrapper">
                <div className="cards slide1"></div>
                <div className="cards slide2"></div>
                <div className="cards slide3"></div>
                <div className="cards slide4"></div>
                <div className="cards slide5"></div>
                <div className="cards slide6"></div>
                <div className="cards slide7"></div>
            </div>
            <div className="bottomscroll"></div>
        

            <div className="c">
                <a id="restorations">
                    <h3 className="mods">RESTORATIONS</h3>
                    <HashLink to="/contact#top"><button className="designyours btn btn-light">DESIGN YOURS</button></HashLink>
                </a>
            </div>
            <div className="d">
                <a id="mods">
                    <h3 className="mods">CUSTOM MODS</h3>
                    <HashLink to="/contact#top"><button className="designyours btn btn-light">DESIGN YOURS</button></HashLink>
                </a>
            </div>
            <div className="e">
                <a id="racecars">
                    <h3 className="mods">RACE CARS</h3>
                    <HashLink to="/contact#top"><button className="designyours btn btn-light">DESIGN YOURS</button></HashLink>
                </a>
            </div>
        </div>
    );
  }
}

export default Home;