import React from "react";
import Test1 from "../images/student.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Test() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
  return (
    <>
     
<section className="heading">
 <h1>What our students are saying?</h1>
 
    </section>


   



             
 
 <main>
             

   
 <Slider {...settings}>
           
           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Sumit Ramraje</h6>
                      <span>Nashik,Maharashtra</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>I was a fresher in regards to stock market but with the help of trade gainers I found it
                    pretty easy to understand the basics of stock market as they provide the training from scratch with easy and simple methods.Thank you sir for your guidance.
                  </p>
              </div>
              
               
                  
           </div>
           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Sumit Ramraje</h6>
                      <span>Nashik,Maharashtra</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>I was a fresher in regards to stock market but with the help of trade gainers I found it
                    pretty easy to understand the basics of stock market as they provide the training from scratch with easy and simple methods.Thank you sir for your guidance.
                  </p>
              </div>
              
               
                  
           </div>

           <div className="client-card">
              
        

              <div className="client-profile flex">
                  <img src={Test1} alt="" />
                  <div className="client-name">
                      <h6>Sumit Ramraje</h6>
                      <span>Nashik,Maharashtra</span>
                  </div>
                  <div className="client-feedback">
                      <h6>4.5</h6>
                    
                  </div>
              </div>
              <div className="client-data">
                  <p>I was a fresher in regards to stock market but with the help of trade gainers I found it
                    pretty easy to understand the basics of stock market as they provide the training from scratch with easy and simple methods.Thank you sir for your guidance.
                  </p>
              </div>
              
               
                  
           </div>


           
           



         </Slider>

 </main>
   
    </>
  );
}
