import React from 'react'
import 'animate.css';
import './css-files/header.css';

const sizeicons = (props) => {

  const animateOut = [props.display ?  "customButtons animated flipInY" : "customButtons animated flipOutY" ] 

  return (
    <div className={animateOut}>
         <img src={props.src} 
         className={props.cssClass}
         onMouseOver={props.onMouseSrc}
         onMouseOut={props.offMouseSrc}
         onClick={props.click}/>
    </div>
  )
}

export default sizeicons;