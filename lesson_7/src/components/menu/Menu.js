import React from "react";
import {Link, NavLink} from 'react-router-dom';
import classes from './Menu.module.css'

const Menu=()=>{
    return (
        <ul className={classes.list}> 
            <li>
                <NavLink to='/' className={({isActive})=>isActive?classes.active : ''}>Main</NavLink>
            </li>
            <li>
                <NavLink to='/users' className={({isActive})=>isActive?classes.active : ''}>User</NavLink>
            </li>
            <li>
                <NavLink to='/count' className={({isActive})=>isActive?classes.active : ''}>Count</NavLink>
            </li>
        </ul>
    )
}

export default Menu;