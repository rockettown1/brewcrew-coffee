import React from 'react';
import './css-files/header.css';
import 'animate.css';



const Name = (props) => {
    
    const displaySugars = [props.index > 0 ? props.updateSugar : null ]

    return <div className={"nameblock animated fadeIn"}>
    <p>
       {props.name} would like a {props.coffeeSize} {props.coffeeChoice} {displaySugars}
    </p>
    
 </div>

}

export default Name;