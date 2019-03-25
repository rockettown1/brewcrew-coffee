import React from 'react';
import '../components/css-files/header.css';

const Counter = (props) => {
    return (
        <div className = "counter">
            <button className="counter-action decrement" onClick={props.decr}>-</button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={props.incr}>+</button>
        </div>
    )
}

export default Counter;