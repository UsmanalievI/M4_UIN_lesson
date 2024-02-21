import React from "react";
import classes from './Input.module.css'

const Input=({placeholder, type='text', onChangeInput})=>{
    return(
        <input placeholder={placeholder} 
            type={type}
            onChange={onChangeInput}
            className={classes.input}
        />
    )
}

export default Input;