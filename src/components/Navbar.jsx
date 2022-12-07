import React, { useState } from "react";

import style from "../style.css";
import {FaBars,FaTimes} from "react-icons/fa";
import {useRef} from "react";
function Navbar(){
   const navRef = useRef();
   const showNavbar = () =>{
    document.querySelector(".menu").style.height="100%";
   }
   const HideNavbar = () =>{
    document.querySelector(".menu").style.height="0";
   }


    return(
    <nav className="flex">
<a href="" className="logo">
    Trade Gainers
    
</a>
<ul className="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Testimonials</a></li>
    <li> <a href="" class="btn-border">Book a Call</a></li>

   
   

    <button className="nav-btn nav-close-btn" onClick={HideNavbar}>
    <FaTimes/>
</button>
</ul>



<button className="nav-btn open" onClick={showNavbar}>
    <FaBars/>
</button>
    </nav>
    )
}
export default Navbar;