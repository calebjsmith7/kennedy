import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = ({title}) =>{

    $(document).ready(function(){
        $(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll > 100) {
              $(".navbar").css("background" , "#2b2b2bd0");
              $(".nbg").css("background" , "none");
            }
            else{
                $(".navbar").css("background" , "none");
                $(".nbg").css("background" , "#2b2b2b5b");  	
            }
        })
      })
    return (
        <nav className="navbar navbar-dark navv fixed-top">
            <div className="mr-auto n left-box">
                <a className="nav-item active left" href="/#restorations">RESTORATIONS</a>
                <a className="nav-item active left" href="/#mods">MODS</a>
                <a className="nav-item active left" href="/#racecars">RACE CARS</a>
            </div>
            <a className="navbar-brand title"><Link to ='/' className="faketitle">home</Link></a>
            <button className="navbar-toggler n ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto n nbg">
                <li className="nav-item active"><Link to='/' className="nav-link l">HOME <span className="sr-only">(current)</span></Link></li>
                <li className="nav-item active"><Link to='/services' className="nav-link l">ABOUT US</Link></li>
                <li className="nav-item active"><a href='/#restorations' className="nav-link l">RESTORATIONS</a></li>
                <li className="nav-item active"><a href='/#mods' className="nav-link l">MODS</a></li>
                <li className="nav-item active"><a href='/#racecars' className="nav-link l">RACE CARS</a></li>
                <li className="nav-item active"><Link to='/contact' className="nav-link l">CONTACT</Link></li>
            </ul>
        </div>
    
        </nav>
    )
}
export default Navbar;