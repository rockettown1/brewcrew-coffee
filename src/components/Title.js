import React from 'react';
import './css-files/header.css';


const title = (props) => (
    <div className="titleblock">
        <p> {props.title}</p>
    </div>
)

export default title;