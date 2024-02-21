import React from "react";
import classes from './ToDo.module.css'
import Button from "../button/Button";

const ToDo=({task, handleDelete})=>{
    return(
        <>
            <li className={classes.task}>
                <p>
                    id:{task.id}
                </p>
                <p>
                    title:{task.title}
                </p>
                <Button text={'delete'} onClick={()=>handleDelete(task.id)}/>
            </li>
        </>
    )
}

export default ToDo;