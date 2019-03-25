import React from 'react'
import 'animate.css';

const coffee = (props) => {

    const animateOut = [props.display ?  "coffeeType animated flipOutX" : "coffeeType animated flipInX" ]  

  return (
    <div className={animateOut} onClick={props.selectCoffee} >
      <p>{props.coffeename}</p>
    </div>
  )
}

export default coffee;