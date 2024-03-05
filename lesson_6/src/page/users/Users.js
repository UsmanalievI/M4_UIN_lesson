import React from "react";
import classes from "./Users.module.css";
import { useEffect, useState } from 'react';

const Users=({users})=>{
    
    const [user, setUser]=useState({})
    const getUser=async(id)=>{
    const data=await fetch(`https://jsonplaceholder.org/users/${id}`)
    const user=await(data.json())
    setUser(users)

  }
    return(
        <ul className={classes.users}>
            {
                users.map(user=>{
                    <li key={user.id} className={classes.user}>
                        <p>Username:{user.login.username}</p>
                        <p>Birthdate:{user.birthDate}</p>
                        <button onClick={()=>getUser(user.id)}>one more...</button>
                    </li>
                })
            }
        </ul>
    )
}
    
export default Users;