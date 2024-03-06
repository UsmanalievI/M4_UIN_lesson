import './App.css';
import Button from './components/button/Button';
import Example from './components/example/example';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import { useEffect, useState } from 'react';
import CountPage from './page/countPage/CountPage';
import Input from './components/input/Input';
import ToDoList from './components/toDoList/ToDoList';
import Users from './page/users/Users';
import Pagination from './components/pagination/Pagination';
import PokemonPage from './page/pokemonPage/PokemonPage';
import axios, { Axios } from 'axios';

function App() {
  const navbar=['home', 'about us', 'contacts']; 
  const [show, setShow]=useState(false)

  const handleShow=()=>{
    setShow(!show)
  }
  const [input, setInput]=useState('');

  const onChangeInput=(event)=>{
    setInput(event.target.value)
  }

  const[tasks, setTasks]=useState([])

  const handleAdd=()=>{
    tasks.push(
      {
        id:tasks.length===0 ? 1 : tasks[tasks.length-1].id+1,
        title: input,
        completed: false
      }
    )
  }
  const handleDone=(id)=>{
    tasks.map(task=>{
      if(task.id===id){
        return task.completed=!task.completed
      }
      return tasks
    })
    setTasks([...tasks])
  }
  const handleEdit=(editTodo)=>{
    tasks.map(task=>{
      if (task.id===editTodo.id)
      return task.title=editTodo.title
    })
    setTasks(tasks)
  }
  const handleDelete=(id)=>{
    const deleted=tasks.filter(task=>task.id!==id)
    setTasks(deleted)
  }
  
  // useEffect(()=>{
  //   localStorage.setItem('user', 'UIN')
  //   localStorage.setItem('age', '23')
  // }, [])

  useEffect(()=>{
    const myLocalList=JSON.parse(localStorage.getItem('tasks'))
    if (myLocalList===null){
      return localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    if (myLocalList.length!==0){
      setTasks(myLocalList)
    }
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log('hi');
  }, [tasks])

  const [users, setUsers]=useState([])
  const getUsers=async()=>{
    const data=await fetch('https://jsonplaceholder.org/users')
    const users=await(data.json())
    setUsers(users)
  }
  
  const handleClear=()=>{
    localStorage.setItem('tasks', []);
    setTasks([])
  }
  
  const [filterOption, setFilterOPtion]=useState('all')
  const handleFilterChange=(event)=>{
    setFilterOPtion(event.target.value)
  }
  const filterTasks=tasks.filter(task=>{
    switch(filterOption){
      case 'completed':
        return task.completed;
      case 'notCompleted':
        return !task.completed
      default:
        return true
    }
  })

  const BASE_URL="https://jsonplaceholder.typicode.com"
  const getApi= async (endpoint)=>{
    const data =await fetch(BASE_URL+endpoint)
    const info= await (data.json())
    setTasks(info)
  }

  const [offset, setOffset]=useState(1)
  const [limit, setLimit]=useState(10)

  const handleLimitChange=(event)=>{
    setLimit(event.target.value)
  }
  const handlePrev=()=>{
    setOffset(prev=>prev-limit)
  }
  const handleNext=()=>{
    setOffset(prev=>prev+limit)
  }
  const page=Math.floor(offset/limit)+1
  
  useEffect(()=>{
    getApi(`todos?_limit=${limit}&_start=${offset}`)
  }, [offset, limit])

  return (
    <>
      {
        show && <Modal handleShow={handleShow}>
          <Input placeholder={'enter text'} onChangeInput={onChangeInput}/>
          <button onClick={handleShow}>close</button>
          <Button onClick={handleAdd} text={'enter'}/>
        </Modal>
      }
      <select value={filterOption} onChange={handleFilterChange}>
        <option value='all'>All tasks</option>
        <option value='completed'>Completed tasks</option>
        <option value='notCompleted'>Not completed tasks</option>
      </select>
      <button onClick={handleShow}>open</button>
      <button onClick={handleClear}>clear</button>
      <button onClick={getUsers}>getApi </button>
      <input type='number' value={limit} onChange={handleLimitChange}/>
      <ToDoList tasks={filterTasks} handleDelete={handleDelete} handleDone={handleDone} handleEdit={handleEdit}/>
      <Pagination handlePrev={handlePrev} handleNext={handleNext} page={page}/>
      <Users users={users}/>
      <PokemonPage/>
    </>
  );
}

export default App;
