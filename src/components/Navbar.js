import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';

const Navbar = ({title}) =>{
    // Darkened navbar on scroll function
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
      // handleCollapse function for navbar collapse onClick
function handleCollapse() {
    var nav = document.getElementById("navbarSupportedContent");
    var btn = document.getElementById("navbarbtn");
    nav.classList.remove("show");
    btn.classList.add("collapsed");
}
//HashLink used specifically for anchors vs. regular React Router Link

    return (
        <nav className="navbar navbar-dark navv fixed-top">
            <div className="mr-auto n left-box">
                <HashLink className="nav-item active left" to="/#restorations">RESTORATIONS</HashLink>
                <HashLink className="nav-item active left" to="/#mods">MODS</HashLink>
                <HashLink className="nav-item active left" to="/#racecars">RACE CARS</HashLink>
            </div>
            <div className="navbar-brand title"><HashLink to ='/#top' className="faketitle">home</HashLink></div>
            <button className="navbar-toggler n ml-auto" id="navbarbtn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="customicon"><i class="fas fa-bars"></i></span>
                </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto n nbg">
                <li className="nav-item active"><HashLink to='/#top' className="nav-link l" onClick={handleCollapse}>HOME <span className="sr-only">(current)</span></HashLink></li>
                <li className="nav-item active"><Link to='/services' className="nav-link l" onClick={handleCollapse}>ABOUT US</Link></li>
                <li className="nav-item active"><HashLink to='/#restorations' className="nav-link l" onClick={handleCollapse}>RESTORATIONS</HashLink></li>
                <li className="nav-item active"><HashLink to='/#mods' className="nav-link l" onClick={handleCollapse}>MODS</HashLink></li>
                <li className="nav-item active"><HashLink to='/#racecars' className="nav-link l" onClick={handleCollapse}>RACE CARS</HashLink></li>
                <li className="nav-item active"><Link to='/contact' className="nav-link l" onClick={handleCollapse}>CONTACT</Link></li>
            </ul>
        </div>
    
        </nav>
    )
}
export default Navbar;