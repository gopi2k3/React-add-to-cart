


import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'


export default class Carousel extends Component {
  render() {
    let bikes=[
      {
         src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/7beee9cb3cfe9ccf.jpg?q=20'
        
      },
      {
          src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/162b16e014373113.jpg?q=20'
       
       },
       {
        src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2467438532863d2e.jpg?q=20'
     
     },
     {
      src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/2b43a232e3d86f58.jpeg?q=20'
   
   },
   {
    src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/162b16e014373113.jpg?q=20'
 
 },
 {
  src:'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eab800bf91815ca4.jpg?q=20'
 }
      
  ];
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed:550,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div>
        
        <Slider {...settings}>
          {
            bikes.map((a,b)=>{
                return(
                    <div className='carousel'key={b}>
                <img  src={a.src} style={{width:"100%",padding:' 10px'}}  alt=''/>
                </div>
                )
            })
          }
                </Slider>
      </div>
    );
  }
}