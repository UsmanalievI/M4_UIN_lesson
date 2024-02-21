import React from "react";
import classes from './Button.module.css';

const Button=({text, onClick})=>{
    return(
        <>
            <button onClick={onClick} className={classes.btn}>{text}</button>
        </>
    )
}
export default Button;