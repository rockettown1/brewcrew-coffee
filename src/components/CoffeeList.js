import React from 'react'
import Coffee from '../components/Coffee';



const coffeelist = (props) => {
  return (
    <div>
      <Coffee coffeename = {props.coffeetype} selectCoffee={props.coffeepicked} display={props.display}/>
    </div>
  )
}

export default coffeelist;