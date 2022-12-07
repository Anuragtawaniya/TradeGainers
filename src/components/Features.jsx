import React, { useState } from "react";
import style from "../style.css";
import Img from "../images/feed.jpg";
import Green from "../images/green.svg";

function Features(){
   


    return(
    <main className="flex main" >
<div className="box1">
<img src={Img} alt="" />
</div>
<div className="hero-content">
<h1>Providing Features</h1>
<p>Trade Gainers is one of the best learning platforms.</p>


<ul>
   <li>  <img src={Green}  className="green-icon" alt="" />Live support</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Dought session</li>
   <li>  <img src={Green}  className="green-icon" alt="" />Training Certification</li>
   

</ul>
</div>
           
    </main>
    )
}
export default Features;