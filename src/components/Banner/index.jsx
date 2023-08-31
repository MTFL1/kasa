import React from 'react'
import "./banner.scss"


function Banner(props){
  const {image, text} = props;
  
   return (
       <div className="banner">
           <img className="banner-img" src={image} alt=""/>
           <span className="banner-text">{text}</span>
       </div>
   )
  }
export default Banner