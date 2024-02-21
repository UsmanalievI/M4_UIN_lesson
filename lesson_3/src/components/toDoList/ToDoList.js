import React from "react";
import classes from './ToDoList.module.css';
import ToDo from "../toDo/ToDo";

const ToDoList=({tasks, handleDelete})=>{
    return(
        <>
            <ul className={classes.list}>
                {tasks.map(todo=> <ToDo key={todo.id} task={todo} handleDelete={handleDelete}/>)}
            </ul>
        </>
    )
}

export default ToDoList;