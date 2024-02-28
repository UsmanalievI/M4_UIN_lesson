import React, { useState } from "react";
import classes from './ToDo.module.css'
import Button from "../button/Button";
import Input from "../input/Input";

const ToDo=({task, handleDelete, handleDone, handleEdit, handleCurrentEdit, isEdit})=>{
    const [input, setInput]=useState(task.title)
    if(isEdit){
        return <div>
            <Input value={input} onChangeInput={event=>setInput(event.target.value)}/>
            <Button text={'cancel'} 
                onClick={()=>{
                    handleCurrentEdit(null)
                }}/>
            <Button text={'save'}
                onClick={()=>{
                    handleEdit({
                        ...task, title:input
                    })
                    handleCurrentEdit(null)
                }}/>
        </div>
    }
    return(
        <>
            <li className={`${classes.task} ${task.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>
                        id:{task.id}
                    </p>
                    <p>
                        title:{task.title}
                    </p>
                </div>
                <div className={classes.btnBox}>
                    <Button text={'delete'} onClick={()=>handleDelete(task.id)}/>
                    <Button text={'edit'} onClick={()=>handleCurrentEdit(task.id)}/>
                    <Button text={'done'} onClick={()=>handleDone(task.id)}/>
                </div>
                
            </li>
        </>
    )
}

export default ToDo;