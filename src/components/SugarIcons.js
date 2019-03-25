import React from 'react'
import 'animate.css';
import './css-files/header.css';
import Counter from '../components/Counter';




const sugaricons = (props) => {

const cssClasses = [props.display ? "sugarBox animated flipInX" : "sugarBox animated flipOutX"]

  return (
    <div className={cssClasses}>
       <img src={props.src} className="sugar"></img>
       <div>
           <Counter incr={props.incr} decr={props.decr} score={props.score}/>
       </div>
       <button className="postSugar" onClick={props.click}>OK?</button>
    </div>
  )
}

export default sugaricons;

