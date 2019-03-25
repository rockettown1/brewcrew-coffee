import React from 'react'
import 'animate.css';
import '../components/css-files/header.css'

const custom = (props) => {

    const animateOut = [props.display ?  "sizesugar animated flipInX" : "sizesugar animated flipOutX" ]  

  return (
      <div className={animateOut}>
        <div className={animateOut}>
            <p>{props.customname}</p>
        </div>
        
    </div>
  )
}

export default custom;