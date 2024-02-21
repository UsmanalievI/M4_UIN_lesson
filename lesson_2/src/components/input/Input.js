import React from "react";

const Input=({placeholder, type='text', onChangeInput})=>{
    return(
        <input placeholder={placeholder} type={type}
                onChange={onChangeInput}
        />
    )
}

export default Input;