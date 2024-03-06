import React from "react";
import classes from './UserInfo.module.css'
import {useParams} from 'react-router-dom'
import { useState } from "react";
import { useEffect } from "react";

const UserInfo=()=>{
    const{id}=useParams()
    
    const [user, setUser]=useState({})
    const getUser=async ()=>{
        const data=await fetch(`https://jsonplaceholder.org/users/${id}`)
        const users=await (data.json())
        setUser(users)
    }
    useEffect(()=>{
        getUser()
    }, [])
    return (
        <>
            <p>{user.firstname}</p>
            <p>{user?.address?.city}</p>
        </>
    )
}

export default UserInfo;