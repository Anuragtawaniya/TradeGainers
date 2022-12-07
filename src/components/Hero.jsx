import React, { useState } from "react";
import style from "../style.css";
import HeroImage from "../images/chart.jpg";

function Hero(){
   


    return(
    <main>
            <section className="hero flex">
        <div class="hero-content">
          <h1 className="hero-heading">We Know the right way of trading</h1>
          <p>we teach trading in stock markets</p>
          <button className="btn">Learnwithus</button>
        </div>
     
        <div className="hero-img">
        <img src={HeroImage} alt="" />
        </div>
    </section> 
    </main>
    )
}
export default Hero;