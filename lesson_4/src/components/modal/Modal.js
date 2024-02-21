import React from "react";
import classes from "./Modal.module.css"
import Input from "../input/Input";

const Modal=({children, handleShow})=>{
    
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
            </div>
                
        </>
    )
}
export default Modal;