import React from "react";
import classes from "./Modal.module.css"

const Modal=({children, handleShow})=>{
    
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
                <button onClick={handleShow}>close</button>
            </div>
                
        </>
    )
}
export default Modal;