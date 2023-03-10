import React, { Component, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import kenvid from "../images/kenvid.mp4";
import kensmallvid from "../images/kensmallvid.mp4";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import kenlogo from '../images/kenlogo-tall.png';
//import kenlogo from '../images/kenlogo-long-wht.png';

const Home = () => {

    let redvalue = 0;
    //document.getElementById('container').scrollLeft(document.getElementById('container').scrollLeft > 10000 ? 1 : null);

    const handleScroll = (event) => {
        window.innerWidth > 600 ? 
        document.getElementById('container').scrollLeft > redvalue ? document.getElementById('container').scrollLeft = document.getElementById('resetflag').getBoundingClientRect().left +  '6%' : console.log('happy')
        :
        document.getElementById('container').scrollLeft > redvalue ? document.getElementById('container').scrollLeft = document.getElementById('resetflag').getBoundingClientRect().left  : console.log('happy')
    }
    useEffect(()=>{
        setTimeout(() => {
            redvalue = document.getElementById('flag').getBoundingClientRect().left;
            console.log('redvalue is ' + redvalue);
        }, 2000);
    },[])

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
                <img id='mobilelogo' src={kenlogo} style={{width: 350, position: 'absolute', top: window.innerHeight/2 - 50, left: window.innerWidth/2 - 175, maxWidth: '95%'}}/>
                <button style={{border: 'none', color: 'transparent', backgroundColor: 'transparent', outline: 'none', position: 'absolute', top: '80%', left: window.innerWidth/2 - 50,}} onClick={()=>window.scroll(0,document.querySelector('.b').getBoundingClientRect().top)}><h1 id="moretext" style={{zIndex: 1000, color: 'white', fontSize: 35}}>MORE</h1><h1 style={{zIndex: 1000, color: 'white', fontSize: 60}}>⌄</h1></button>
            </div>
            
            
            <div className="b">
                <h1 className="info">At Kennedy Race Cars, we are known for high quality craftsmanship and service on your race car, muscle car, or resto-mod dream machine.<br/>KRC will exceed your expectations!</h1>
            <hr className="binfoh"/>
            </div>
            <div className="scrollsection"><h1 className="gallery">PARTIAL GALLERY</h1></div>
            <div className="scrolling-wrapper" id="container" onScroll={handleScroll}>
            
                <div className="cards slide1" id='resetflag'></div>
                <div className="cards slide2"></div>
                <div className="cards slide3"></div>
                <div className="cards slide4"></div>
                <div className="cards slide5"></div>
                <div className="cards slide6"></div>
                <div className="cards slide7"></div>
                <div className="cards slide8"></div>
                <div className="cards slide9"></div>
                <div className="cards slide10"></div>
                <div className="cards slide11"></div>
                <div className="cards slide12"></div>
                <div className="cards slide13"></div>
                <div className="cards slide1" id="flag"></div>
                <div className="cards slide2"></div>
                <div className="cards slide3"></div>
                <div className="cards slide4"></div>
           
            </div>
        
            <div className="bottomscroll">
            <button style={{backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: 60, marginRight: 100, outline: 'none', display: window.innerWidth < 600 ? 'none' : true}} onClick={()=>{document.getElementById('container').scrollLeft -= 625}}>←</button>
                <button style={{backgroundColor: 'transparent', color: 'white', border: 'none', fontSize: 60, outline: 'none', display: window.innerWidth < 600 ? 'none' : true}} onClick={()=>document.getElementById('container').scrollLeft += 625}>→</button>
            </div>
        

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

export default Home;