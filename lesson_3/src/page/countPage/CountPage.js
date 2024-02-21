import React from "react";
import classes from "./CountPage.module.css"
import { useState } from "react";

const CountPage=()=>{
    const [count, setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decriement=()=>{
        if (count>0){
            setCount(count-1)
        }
    }

    return (
        <>
            <div className={classes.wrapper}>
                <p>Count:{count}</p>
                <button onClick={increment}>increment</button>
                <button onClick={decriement}>decriement</button>
            </div>
        </>
    )
}
export default CountPage;