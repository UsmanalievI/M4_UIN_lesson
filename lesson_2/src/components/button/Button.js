import React from "react";
import classes from './Button.module.css';

const Button=({text})=>{
    return(
        <>
            <button className={classes.textGreen}>{text}</button>
        </>
    )
}
export default Button;