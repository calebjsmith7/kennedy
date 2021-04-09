import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import carvid from "../images/carvid.mp4";

class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <div>
            <div className="a">
                <video autoPlay={true} autostart="true" loop={true} muted={true} preload="true" id="background" width="100%" className="video">
                    <source src={carvid} type="video/mp4" id="vid"></source>
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
                <div className="card slide1"></div>
                <div className="card slide2"></div>
                <div className="card slide3"></div>
                <div className="card slide4"></div>
                <div className="card slide5"></div>
                <div className="card slide6"></div>
                <div className="card slide7"></div>
            </div>
            <div className="bottomscroll"></div>
        

            <div className="c">
                <a id="mods">
                    <h3 className="mods">CUSTOM MODS</h3>
                    <button className="designyours btn btn-light">DESIGN YOURS</button>
                </a>
            </div>
            <div className="d">
                <a id="restorations">
                    <h3 className="mods">RESTORATIONS</h3>
                    <button className="designyours btn btn-light">DESIGN YOURS</button>
                </a>
            </div>
            <div className="e">
                <a id="racecars">
                    <h3 className="mods">RACE CARS</h3>
                    <button className="designyours btn btn-light">DESIGN YOURS</button>
                </a>
            </div>
            <div className="f"></div>
        </div>
    );
  }
}

export default Home;