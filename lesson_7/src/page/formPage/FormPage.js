import React from "react";
import { useState } from "react";

const FormPage=()=>{
    const [inputValue, setInpitValue]= useState('')
    const changeInput=(event)=>{ 
        setInpitValue(event.target.value)
    }

    return (
        <div>
            <input name="user" type="text" placeholder="user" onChange={changeInput}/>
        </div>
    )
}

export default FormPage;