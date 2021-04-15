import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import kenvid from "../images/kenvid.mp4";
import kensmallvid from "../images/kensmallvid.mp4";

class Home extends Component {
  
  render() {
    return (
        <div>
            <div className="a">
                <video playsInline webkit-playsinline autoPlay loop muted preload="true" id="bigvid" width="100%" className="video">
                <source src={kenvid} playsinline type="video/mp4" media="(min-device-width: 568px)"></source>
                </video>
                <video playsInline webkit-playsinline autoPlay loop muted preload="true" id="smallvid" width="100%" className="video">
                <source src={kensmallvid} playsinline type="video/mp4" media="(max-device-width: 568px)"></source>
                </video>
            </div>
            
            <div className="b">
                <h1 className="info">At Kennedy Racecars <br/> we specialize in providing the highest quality <br/>
                Restorations, Modifications, and Race Cars <br/>
                and always exceed expectations</h1>
            <hr/>
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
                    <a href="/contact"><button className="designyours btn btn-light">DESIGN YOURS</button></a>
                </a>
            </div>
            <div className="d">
                <a id="mods">
                    <h3 className="mods">CUSTOM MODS</h3>
                    <a href="/contact"><button className="designyours btn btn-light">DESIGN YOURS</button></a>
                </a>
            </div>
            <div className="e">
                <a id="racecars">
                    <h3 className="mods">RACE CARS</h3>
                    <a href="/contact"><button className="designyours btn btn-light">DESIGN YOURS</button></a>
                </a>
            </div>
        </div>
    );
  }
}

export default Home;