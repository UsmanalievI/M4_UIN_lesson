import React from "react";
import classes from "./Modal.module.css"

const Modal=({children, handleShow})=>{
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}></div>
                <button onClick={handleShow}>close</button>
        </>
    )
}
export default Modal;