import React from "react";
import './Calculator.css';
import './App.css'

const Button = (props) => {
    return (
        <button 
            className="ButtonStyle" 
            value={props.label}  
            onClick={props.onClick}
        >
            {props.label}
        </button>
    );
};

export default Button;